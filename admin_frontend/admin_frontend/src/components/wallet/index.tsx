import { FC, useCallback } from "react";
import styles from "./style.module.css";
import { message, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { useWeb3React } from "@web3-react/core";
import { useWalletInfo } from "../../customhook/web3Hooks";

import { injectedConnector } from "../../utils/walletUtils";
import { Button } from "../Button";

const WalletConnector: FC = () => {
  const { connector, active, activate, error } = useWeb3React();
  const { balance, account,  } = useWalletInfo();
  const handleActiveWallet = useCallback(() => {
    if (typeof (window as any).ethereum == "undefined") {
      window.open("https://metamask.io/");
      return;
    }
    activate(injectedConnector, (error: Error) => {
      message.error(error.message);
    });
  }, []);

  const activating = connector === injectedConnector;
  const disabled = !!error;


  if (!active) {
    return (
      <Button
        onClick={handleActiveWallet}
        loading={activating}
        disabled={!!disabled}
        color="info"
      >
         Connect wallet
      </Button>
    );
  }

  return (
    <Space className={styles.balance} align="center" size={7}>
      <label>Balance:</label>
      <span>{balance} ETH</span>
    </Space>
  );
};

export default WalletConnector;
