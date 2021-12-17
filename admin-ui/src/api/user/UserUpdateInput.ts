import { PrivateInvestigatorWhereUniqueInput } from "../privateInvestigator/PrivateInvestigatorWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  privateInvestigators?: PrivateInvestigatorWhereUniqueInput | null;
  roles?: Array<string>;
  username?: string;
};
