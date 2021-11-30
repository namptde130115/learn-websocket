import { types } from "@babel/core";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { useQuery, UseQueryOptions } from "react-query";
import Web3 from "web3";
import { getGasPricesRequest } from "../../api/transaction-api";
import { IGasPrices } from "../../api/types";
import { Message } from "../../components";
import { useContract } from "../../hook/web3Hooks";
import { CONTRACT_ADDRESS, CONTRACT_NETWORK, GAS_DEFAULT, injectedConnector } from "../../utils/walletUtils";

const useGasprice = (
  network: string,
  option?: UseQueryOptions<IGasPrices, Error>
) => {
  return useQuery<IGasPrices, Error>(
    "gasPrices",
    () => getGasPricesRequest(network),
    option
  );
};

const formatErrorMessage = (message: string) => {
  const index = message.indexOf('(');
  return message.substr(0, index);
}


const useConnectSmartContract = () => {
  const { activate, account, library } = useWeb3React<Web3>();
  const [loading, setLoading] = useState(false);
  const [fee, setFee] = useState(0);
  const [adminReceiver, setAdminReceiver] = useState(0);
  const [timeForWithdrawUnclaimed, setTimeForWithdrawUnclaimed] = useState(0);
  const [owner, setOwner] = useState('');
  const contract = useContract(true);
  const { data: gasPriceData } = useGasprice(CONTRACT_NETWORK);

  const closeHackathon = async (value: any) => {
    try {
      await connectMetamask()
      if (account !== owner) {
        Message({type: "error", content: "Please connect metamask with address owner!" });
        return;
      }
      setLoading(true);
      const data = contract?.methods.close(value).encodeABI();
      const dataObj = {
        from: account,
        to: CONTRACT_ADDRESS,
        nonce: await library?.eth.getTransactionCount(account || ''),
        data,
      } as any;
      const gasPriceWei = library?.utils.toWei(
        library.utils.toBN(gasPriceData?.fast?.toFixed(0) || GAS_DEFAULT),
        "ether"
      ) || '';
      const gasLimit = await library?.eth.estimateGas(dataObj) || 0;

      contract?.methods
        .close(value)
        .send({
          from: account,
          gasPrice: library?.utils.fromWei(gasPriceWei, "gwei"),
          gas: library?.utils.toHex(gasLimit),
        })
        .on("transactionHash", async (hash: any) => {
          console.log(hash);
        })
        .on("receipt", (receipt: any) => {
          console.log(receipt);
        })
        .on("confirmation", (confirmationNumber: any, receipt: any) => {
          console.log({ confirmationNumber, receipt });
          if (confirmationNumber === 0) {
            init();
          }
        })
        .on("error", (error: Error, receipt: any) => {
          console.log({ error, receipt });
          setLoading(false);
        });
    } catch (e: any) {
      Message({ type: "error", content: formatErrorMessage(e.message) });
      setLoading(false);
    }
  }
  const changeFee = async (value: any) => {
    if (value === fee) {
      Message({ type: "error", content: " Must change to new value" });
      return
    }
    try {
      setLoading(true);
      const data = contract?.methods.setFee(value).encodeABI();
      const dataObj = {
        from: account,
        to: CONTRACT_ADDRESS,
        nonce: await library?.eth.getTransactionCount(account || ''),
        data,
      } as any;
      const gasPriceWei = library?.utils.toWei(
        library.utils.toBN(gasPriceData?.fast?.toFixed(0) || GAS_DEFAULT),
        "ether"
      ) || '';
      const gasLimit = await library?.eth.estimateGas(dataObj) || 0;

      contract?.methods
        .setFee(value)
        .send({
          from: account,
          gasPrice: library?.utils.fromWei(gasPriceWei, "gwei"),
          gas: library?.utils.toHex(gasLimit),
        })
        .on("transactionHash", async (hash: any) => {
          console.log(hash);
        })
        .on("receipt", (receipt: any) => {
          console.log('a', receipt);
        })
        .on("confirmation", (confirmationNumber: any, receipt: any) => {
          console.log({ confirmationNumber, receipt });
          if (confirmationNumber === 0) {
            init();
          }
        })
        .on("error", (error: Error, receipt: any) => {
          console.log({ error, receipt });
          setLoading(false);
        });
    } catch (e: any) {
      Message({ type: "error", content: formatErrorMessage(e.message) });
      setLoading(false);
    }
  };

  const changeTimeForWithdrawUnclaimed = async (_value: any) => {
    if (_value === timeForWithdrawUnclaimed) {
      Message({ type: "error", content: " Must change to new value" });
      return
    }
    try {
      const value = _value * 60;
      setLoading(true);
      const data = contract?.methods.setTime(value).encodeABI();
      const dataObj = {
        from: account,
        to: CONTRACT_ADDRESS,
        nonce: await library?.eth.getTransactionCount(account || ''),
        data,
      } as any;
      const gasPriceWei = library?.utils.toWei(
        library.utils.toBN(gasPriceData?.fast?.toFixed(0) || GAS_DEFAULT),
        "ether"
      ) || '';
      const gasLimit = await library?.eth.estimateGas(dataObj) || 0;

      contract?.methods
        .setTime(value)
        .send({
          from: account,
          gasPrice: library?.utils.fromWei(gasPriceWei, "gwei"),
          gas: library?.utils.toHex(gasLimit),
        })
        .on("transactionHash", async (hash: any) => {
          console.log(hash);
        })
        .on("receipt", (receipt: any) => {
          console.log(receipt);
        })
        .on("confirmation", (confirmationNumber: any, receipt: any) => {
          console.log({ confirmationNumber, receipt });
          if (confirmationNumber === 0) {
            init();
          }
        })
        .on("error", (error: Error, receipt: any) => {
          console.log({ error, receipt });
          setLoading(false);
        });
    } catch (e: any) {
      Message({ type: "error", content: formatErrorMessage(e.message) });
      setLoading(false);
    }
  };

  const changeAddress = async (value: any) => {
    if (value === adminReceiver) {
      Message({ type: "error", content: " Must change to new value" });
      return
    }
    setLoading(true);
    try {
      const data = contract?.methods.setAdminReceiver(value).encodeABI();
      const dataObj = {
        from: account,
        to: CONTRACT_ADDRESS,
        nonce: await library?.eth.getTransactionCount(account || ''),
        data,
      } as any;
      const gasPriceWei = library?.utils.toWei(
        library.utils.toBN(gasPriceData?.fast?.toFixed(0) || GAS_DEFAULT),
        "ether"
      ) || '';
      const gasLimit = await library?.eth.estimateGas(dataObj) || 0;

      contract?.methods
        .setAdminReceiver(value)
        .send({
          from: account,
          gasPrice: library?.utils.fromWei(gasPriceWei, "gwei"),
          gas: library?.utils.toHex(gasLimit),
        })
        .on("transactionHash", async (hash: any) => {
          console.log(hash);
        })
        .on("receipt", (receipt: any) => {
          console.log(receipt);
        })
        .on("confirmation", (confirmationNumber: any, receipt: any) => {
          console.log({ confirmationNumber, receipt });
          if (confirmationNumber === 0) {
            init();
          }
          console.log('aaaaaaaa')
        })
        .on("error", (error: Error, receipt: any) => {
          console.log({ error, receipt });
          setLoading(false);
        });
    } catch (e: any) {
      Message({ type: "error", content: formatErrorMessage(e.message) });
      setLoading(false);
    }
  }

  const init = async () => {

    setLoading(true);
    const _fee = await contract?.methods.fee().call();
    const _timeForWithdrawUnclaimed = +(await contract?.methods
      .timeForWithdrawUnclaimed()
      .call());
    const _adminReceiver = await contract?.methods
      .adminReceiver()
      .call();
    const _owner = await contract?.methods
      .owner()
      .call();
    setOwner(_owner);
    setFee(_fee);
    setAdminReceiver(_adminReceiver);
    setTimeForWithdrawUnclaimed(_timeForWithdrawUnclaimed > 0 ? _timeForWithdrawUnclaimed / 60 : 0);
    setLoading(false);
  }

  const connectMetamask = async () => {
    if (!library || !account || !contract) {
      if (typeof (window as any).ethereum == "undefined") {
        window.location.assign("https://metamask.io/");
        return;
      }
      await activate(injectedConnector, (error: Error) => {
      });
      return;
    }
  }

  useEffect(() => {
    if (!library) return;
    init()
  }, [library]);

  return {
    fee,
    account,
    owner,
    timeForWithdrawUnclaimed,
    adminReceiver,
    loading,
    changeFee,
    changeTimeForWithdrawUnclaimed,
    changeAddress,
    connectMetamask,
    closeHackathon,
  };
};


export default useConnectSmartContract;