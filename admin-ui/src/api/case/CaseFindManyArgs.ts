import { CaseWhereInput } from "./CaseWhereInput";
import { CaseOrderByInput } from "./CaseOrderByInput";

export type CaseFindManyArgs = {
  where?: CaseWhereInput;
  orderBy?: CaseOrderByInput;
  skip?: number;
  take?: number;
};
