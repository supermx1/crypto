import { CryptocurrencySearchWhereInput } from "./CryptocurrencySearchWhereInput";
import { CryptocurrencySearchOrderByInput } from "./CryptocurrencySearchOrderByInput";

export type CryptocurrencySearchFindManyArgs = {
  where?: CryptocurrencySearchWhereInput;
  orderBy?: CryptocurrencySearchOrderByInput;
  skip?: number;
  take?: number;
};
