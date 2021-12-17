import { registerEnumType } from "@nestjs/graphql";

export enum EnumCaseStatus {
  Processing = "Processing",
  Completed = "Completed",
  Failed = "Failed",
}

registerEnumType(EnumCaseStatus, {
  name: "EnumCaseStatus",
});
