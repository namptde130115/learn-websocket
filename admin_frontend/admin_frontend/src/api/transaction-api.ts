import axios from "./axios-client";
import { IGasPrices } from "./types";

  
export const getGasPricesRequest = async (
    network: string
  ): Promise<IGasPrices> => {
    const { data } = await axios({
      url: `https://api.anyblock.tools/ethereum/ethereum/${network}/latest-minimum-gasprice`,
      method: "GET",
    });
    return data;
  };
  