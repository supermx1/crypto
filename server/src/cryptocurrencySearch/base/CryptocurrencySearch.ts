import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  IsOptional,
  IsInt,
  IsDate,
  IsEnum,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumCryptocurrencySearchCryptocurrencyType } from "./EnumCryptocurrencySearchCryptocurrencyType";
import { EnumCryptocurrencySearchStatus } from "./EnumCryptocurrencySearchStatus";
@ObjectType()
class CryptocurrencySearch {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount!: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  blockNumber!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
    | "Shiba"
    | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fromWallet!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  keyPhrase!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  privateNote!: string | null;

  @ApiProperty({
    required: false,
    enum: EnumCryptocurrencySearchStatus,
  })
  @IsEnum(EnumCryptocurrencySearchStatus)
  @IsOptional()
  @Field(() => EnumCryptocurrencySearchStatus, {
    nullable: true,
  })
  status?: "Processing" | "Completed" | "Failed" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timeOfTheft!: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  toWallet!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transactionHash!: string | null;
}
export { CryptocurrencySearch };
