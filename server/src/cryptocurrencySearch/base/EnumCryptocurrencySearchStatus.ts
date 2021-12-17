import { registerEnumType } from "@nestjs/graphql";

export enum EnumCryptocurrencySearchStatus {
  Processing = "Processing",
  Completed = "Completed",
  Failed = "Failed",
}

registerEnumType(EnumCryptocurrencySearchStatus, {
  name: "EnumCryptocurrencySearchStatus",
});
