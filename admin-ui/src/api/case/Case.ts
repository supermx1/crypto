import { User } from "../user/User";

export type Case = {
  amount: number | null;
  blockNumber: number | null;
  createdAt: Date;
  cryptocurrencyType?:
    | "Bitcoin"
    | "Ethereum"
    | "Litecoin"
    | "Dogecoin"
    | "Ripple"
    | "Shiba"
    | null;
  fromWallet: string | null;
  id: string;
  keyPhrase: string | null;
  privateNote: string | null;
  status?: "Processing" | "Completed" | "Failed" | null;
  timeOfTheft: Date | null;
  toWallet: string | null;
  transactionHash: string | null;
  user?: User | null;
};
