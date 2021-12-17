import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PrivateInvestigatorWhereInput } from "./PrivateInvestigatorWhereInput";
import { Type } from "class-transformer";
import { PrivateInvestigatorOrderByInput } from "./PrivateInvestigatorOrderByInput";

@ArgsType()
class PrivateInvestigatorFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PrivateInvestigatorWhereInput,
  })
  @Field(() => PrivateInvestigatorWhereInput, { nullable: true })
  @Type(() => PrivateInvestigatorWhereInput)
  where?: PrivateInvestigatorWhereInput;

  @ApiProperty({
    required: false,
    type: PrivateInvestigatorOrderByInput,
  })
  @Field(() => PrivateInvestigatorOrderByInput, { nullable: true })
  @Type(() => PrivateInvestigatorOrderByInput)
  orderBy?: PrivateInvestigatorOrderByInput;

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

export { PrivateInvestigatorFindManyArgs };
