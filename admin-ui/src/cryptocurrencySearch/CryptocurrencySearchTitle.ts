import { CryptocurrencySearch as TCryptocurrencySearch } from "../api/cryptocurrencySearch/CryptocurrencySearch";

export const CRYPTOCURRENCYSEARCH_TITLE_FIELD = "fromWallet";

export const CryptocurrencySearchTitle = (
  record: TCryptocurrencySearch
): string => {
  return record.fromWallet || record.id;
};
