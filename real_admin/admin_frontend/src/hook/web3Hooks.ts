import { useState, useEffect, useMemo } from "react";
import { message } from "antd";

import { useWeb3React } from "@web3-react/core";
import { CONTRACT_ADDRESS, injectedConnector } from "../utils/walletUtils";
import Web3 from "web3";
import ABI from "../contracts/HackathonRebaked.json";

export const useEagerConnect = () => {
  const { activate, active } = useWeb3React();

  const [tried, setTried] = useState(false);

  useEffect(() => {
    injectedConnector.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injectedConnector, undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, []);

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
};

export const useInactiveListener = (suppress: boolean = false) => {
  const { active, error, activate, deactivate } = useWeb3React();

  useEffect((): any => {
    const { ethereum } = window as any;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        console.log("Handling 'connect' event");
        activate(injectedConnector);
      };
      const handleChainChanged = (chainId: string | number) => {
        console.log("Handling 'chainChanged' event with payload", chainId);
        activate(injectedConnector, (error: Error) => {
          message.error(error.message);
          deactivate();
        });
      };
      const handleAccountsChanged = (accounts: string[]) => {
        console.log("Handling 'accountsChanged' event with payload", accounts);
        if (accounts.length > 0) {
          activate(injectedConnector);
        }
      };
      const handleNetworkChanged = (networkId: string | number) => {
        console.log("Handling 'networkChanged' event with payload", networkId);
        activate(injectedConnector);
      };

      ethereum.on("connect", handleConnect);
      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);
      ethereum.on("networkChanged", handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("connect", handleConnect);
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
          ethereum.removeListener("networkChanged", handleNetworkChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
};

export const useWalletInfo = () => {
  const { account, library, chainId } = useWeb3React<Web3>();
  const [balance, setBalance] = useState<any>();

  useEffect(() => {

    if (!!account && !!library) {
      let stale = false;
      (async () => {
        try {
          const balanceWei = await library.eth.getBalance(account);
          const balanceEth = library.utils.fromWei(balanceWei);
          if (!stale) setBalance(Number(balanceEth).toFixed(4) || "0");
        } catch (err) {
          if (!stale) setBalance(undefined);
        }
      })();
      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  const truncatedAccount = useMemo(() => {
    return account === null
      ? "-"
      : account
      ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
      : "";
  }, [account]);

  return { balance, truncatedAccount, account, CONTRACT_ADDRESS };
};

export const useContract = (withSigner = false) => {
  const { library, account } = useWeb3React<Web3>();

  return useMemo(() => {
    if (CONTRACT_ADDRESS && library && ABI) {
      return new library.eth.Contract(ABI.abi as any, CONTRACT_ADDRESS);
    }
    return undefined;
  }, [CONTRACT_ADDRESS, withSigner, library, account]);
};
