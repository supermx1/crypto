export type CryptocurrencySearchUpdateInput = {
  amount?: number | null;
  blockNumber?: number | null;
  cryptocurrencyType?:
    | "Bitcoin"
    | "Ethereum"
    | "Litecoin"
    | "Dogecoin"
    | "Ripple"
    | "Shiba"
    | null;
  fromWallet?: string | null;
  keyPhrase?: string | null;
  privateNote?: string | null;
  status?: "Processing" | "Completed" | "Failed" | null;
  timeOfTheft?: Date | null;
  toWallet?: string | null;
  transactionHash?: string | null;
};
