import { PrivateInvestigator as TPrivateInvestigator } from "../api/privateInvestigator/PrivateInvestigator";

export const PRIVATEINVESTIGATOR_TITLE_FIELD = "companyName";

export const PrivateInvestigatorTitle = (
  record: TPrivateInvestigator
): string => {
  return record.companyName || record.id;
};
