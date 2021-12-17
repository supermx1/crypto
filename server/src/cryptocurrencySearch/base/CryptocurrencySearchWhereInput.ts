import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum } from "class-validator";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EnumCryptocurrencySearchCryptocurrencyType } from "./EnumCryptocurrencySearchCryptocurrencyType";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnumCryptocurrencySearchStatus } from "./EnumCryptocurrencySearchStatus";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
@InputType()
class CryptocurrencySearchWhereInput {
  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  amount?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  blockNumber?: IntNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumCryptocurrencySearchCryptocurrencyType,
  })
  @IsEnum(EnumCryptocurrencySearchCryptocurrencyType)
  @IsOptional()
  @Field(() => EnumCryptocurrencySearchCryptocurrencyType, {
    nullable: true,
  })
  cryptocurrencyType?:
    | "Bitcoin"
    | "Ethereum"
    | "Litecoin"
    | "Dogecoin"
    | "Ripple"
    | "Shiba";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fromWallet?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  keyPhrase?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  privateNote?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumCryptocurrencySearchStatus,
  })
  @IsEnum(EnumCryptocurrencySearchStatus)
  @IsOptional()
  @Field(() => EnumCryptocurrencySearchStatus, {
    nullable: true,
  })
  status?: "Processing" | "Completed" | "Failed";

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  timeOfTheft?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  toWallet?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  transactionHash?: StringNullableFilter;
}
export { CryptocurrencySearchWhereInput };
