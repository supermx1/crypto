import { Case } from "../case/Case";
import { PrivateInvestigator } from "../privateInvestigator/PrivateInvestigator";

export type User = {
  cases?: Array<Case>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  privateInvestigators?: PrivateInvestigator | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
