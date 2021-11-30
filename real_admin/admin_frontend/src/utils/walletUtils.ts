import { InjectedConnector } from "@web3-react/injected-connector";

export const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS || "";

export const CONTRACT_NETWORK = process.env.REACT_APP_CONTRACT_NETWORK || "";

export const GAS_DEFAULT = 0.001; //ETH

const NETWORK_CHAIN_IDS = {
  mainnet: 1,
  rinkeby: 4,
  ropsten: 3,
  localhost: 1337,
};

export const injectedConnector = new InjectedConnector({
  supportedChainIds: Object.values(NETWORK_CHAIN_IDS),
});
