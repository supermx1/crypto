import { registerEnumType } from "@nestjs/graphql";

export enum EnumCaseCryptocurrencyType {
  Bitcoin = "Bitcoin",
  Ethereum = "Ethereum",
  Litecoin = "Litecoin",
  Dogecoin = "Dogecoin",
  Ripple = "Ripple",
  Shiba = "Shiba",
}

registerEnumType(EnumCaseCryptocurrencyType, {
  name: "EnumCaseCryptocurrencyType",
});
