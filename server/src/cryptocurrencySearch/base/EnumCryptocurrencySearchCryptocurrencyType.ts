import { registerEnumType } from "@nestjs/graphql";

export enum EnumCryptocurrencySearchCryptocurrencyType {
  Bitcoin = "Bitcoin",
  Ethereum = "Ethereum",
  Litecoin = "Litecoin",
  Dogecoin = "Dogecoin",
  Ripple = "Ripple",
  Shiba = "Shiba",
}

registerEnumType(EnumCryptocurrencySearchCryptocurrencyType, {
  name: "EnumCryptocurrencySearchCryptocurrencyType",
});
