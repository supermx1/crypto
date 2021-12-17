import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PrivateInvestigatorCreateInput = {
  code?: number | null;
  companyName?: string | null;
  companyRegistrationId?: string | null;
  cyberSecurityExpert?: string | null;
  fraudInvestigationNumber?: string | null;
  image?: string | null;
  investigatorEmail?: string | null;
  investigatorName?: string | null;
  user?: UserWhereUniqueInput;
};
