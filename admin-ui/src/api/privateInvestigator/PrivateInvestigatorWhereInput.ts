import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PrivateInvestigatorWhereInput = {
  companyName?: StringNullableFilter;
  companyRegistrationId?: StringNullableFilter;
  cyberSecurityExpert?: StringNullableFilter;
  fraudInvestigationNumber?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  investigatorEmail?: StringNullableFilter;
  investigatorName?: StringNullableFilter;
};
