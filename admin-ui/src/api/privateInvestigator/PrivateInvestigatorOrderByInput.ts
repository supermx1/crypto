import { SortOrder } from "../../util/SortOrder";

export type PrivateInvestigatorOrderByInput = {
  companyName?: SortOrder;
  companyRegistrationId?: SortOrder;
  createdAt?: SortOrder;
  cyberSecurityExpert?: SortOrder;
  fraudInvestigationNumber?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  investigatorEmail?: SortOrder;
  investigatorName?: SortOrder;
  updatedAt?: SortOrder;
};
