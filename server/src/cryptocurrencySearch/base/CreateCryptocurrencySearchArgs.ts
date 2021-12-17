import { ArgsType, Field } from "@nestjs/graphql";
import { CryptocurrencySearchCreateInput } from "./CryptocurrencySearchCreateInput";

@ArgsType()
class CreateCryptocurrencySearchArgs {
  @Field(() => CryptocurrencySearchCreateInput, { nullable: false })
  data!: CryptocurrencySearchCreateInput;
}

export { CreateCryptocurrencySearchArgs };
