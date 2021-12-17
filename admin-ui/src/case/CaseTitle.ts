import { Case as TCase } from "../api/case/Case";

export const CASE_TITLE_FIELD = "fromWallet";

export const CaseTitle = (record: TCase): string => {
  return record.fromWallet || record.id;
};
