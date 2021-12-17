import { SortOrder } from "../../util/SortOrder";

export type CaseOrderByInput = {
  amount?: SortOrder;
  blockNumber?: SortOrder;
  createdAt?: SortOrder;
  cryptocurrencyType?: SortOrder;
  fromWallet?: SortOrder;
  id?: SortOrder;
  keyPhrase?: SortOrder;
  privateNote?: SortOrder;
  status?: SortOrder;
  timeOfTheft?: SortOrder;
  toWallet?: SortOrder;
  transactionHash?: SortOrder;
  userId?: SortOrder;
};
