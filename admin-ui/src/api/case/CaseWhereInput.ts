import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CaseWhereInput = {
  amount?: FloatNullableFilter;
  blockNumber?: IntNullableFilter;
  cryptocurrencyType?:
    | "Bitcoin"
    | "Ethereum"
    | "Litecoin"
    | "Dogecoin"
    | "Ripple"
    | "Shiba";
  fromWallet?: StringNullableFilter;
  id?: StringFilter;
  keyPhrase?: StringNullableFilter;
  privateNote?: StringNullableFilter;
  status?: "Processing" | "Completed" | "Failed";
  timeOfTheft?: DateTimeNullableFilter;
  toWallet?: StringNullableFilter;
  transactionHash?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
