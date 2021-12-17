import { ArgsType, Field } from "@nestjs/graphql";
import { CryptocurrencySearchWhereUniqueInput } from "./CryptocurrencySearchWhereUniqueInput";
import { CryptocurrencySearchUpdateInput } from "./CryptocurrencySearchUpdateInput";

@ArgsType()
class UpdateCryptocurrencySearchArgs {
  @Field(() => CryptocurrencySearchWhereUniqueInput, { nullable: false })
  where!: CryptocurrencySearchWhereUniqueInput;
  @Field(() => CryptocurrencySearchUpdateInput, { nullable: false })
  data!: CryptocurrencySearchUpdateInput;
}

export { UpdateCryptocurrencySearchArgs };
