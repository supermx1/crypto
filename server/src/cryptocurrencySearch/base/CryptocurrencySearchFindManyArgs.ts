import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CryptocurrencySearchWhereInput } from "./CryptocurrencySearchWhereInput";
import { Type } from "class-transformer";
import { CryptocurrencySearchOrderByInput } from "./CryptocurrencySearchOrderByInput";

@ArgsType()
class CryptocurrencySearchFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CryptocurrencySearchWhereInput,
  })
  @Field(() => CryptocurrencySearchWhereInput, { nullable: true })
  @Type(() => CryptocurrencySearchWhereInput)
  where?: CryptocurrencySearchWhereInput;

  @ApiProperty({
    required: false,
    type: CryptocurrencySearchOrderByInput,
  })
  @Field(() => CryptocurrencySearchOrderByInput, { nullable: true })
  @Type(() => CryptocurrencySearchOrderByInput)
  orderBy?: CryptocurrencySearchOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CryptocurrencySearchFindManyArgs };
