import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PrivateInvestigatorWhereInput = {
  code?: IntNullableFilter;
  companyName?: StringNullableFilter;
  companyRegistrationId?: StringNullableFilter;
  cyberSecurityExpert?: StringNullableFilter;
  fraudInvestigationNumber?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  investigatorEmail?: StringNullableFilter;
  investigatorName?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
