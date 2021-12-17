import { ArgsType, Field } from "@nestjs/graphql";
import { CryptocurrencySearchWhereUniqueInput } from "./CryptocurrencySearchWhereUniqueInput";

@ArgsType()
class DeleteCryptocurrencySearchArgs {
  @Field(() => CryptocurrencySearchWhereUniqueInput, { nullable: false })
  where!: CryptocurrencySearchWhereUniqueInput;
}

export { DeleteCryptocurrencySearchArgs };
