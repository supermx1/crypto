import { ArgsType, Field } from "@nestjs/graphql";
import { CryptocurrencySearchWhereUniqueInput } from "./CryptocurrencySearchWhereUniqueInput";

@ArgsType()
class CryptocurrencySearchFindUniqueArgs {
  @Field(() => CryptocurrencySearchWhereUniqueInput, { nullable: false })
  where!: CryptocurrencySearchWhereUniqueInput;
}

export { CryptocurrencySearchFindUniqueArgs };
