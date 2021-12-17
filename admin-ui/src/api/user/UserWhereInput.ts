import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PrivateInvestigatorWhereUniqueInput } from "../privateInvestigator/PrivateInvestigatorWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  privateInvestigators?: PrivateInvestigatorWhereUniqueInput;
  username?: StringFilter;
};
