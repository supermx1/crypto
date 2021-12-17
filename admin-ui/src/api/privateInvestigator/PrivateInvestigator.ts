import { User } from "../user/User";

export type PrivateInvestigator = {
  code: number | null;
  companyName: string | null;
  companyRegistrationId: string | null;
  createdAt: Date;
  cyberSecurityExpert: string | null;
  fraudInvestigationNumber: string | null;
  id: string;
  image: string | null;
  investigatorEmail: string | null;
  investigatorName: string | null;
  updatedAt: Date;
  user?: User;
};
