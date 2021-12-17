import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CaseWhereInput } from "./CaseWhereInput";
import { Type } from "class-transformer";
import { CaseOrderByInput } from "./CaseOrderByInput";

@ArgsType()
class CaseFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CaseWhereInput,
  })
  @Field(() => CaseWhereInput, { nullable: true })
  @Type(() => CaseWhereInput)
  where?: CaseWhereInput;

  @ApiProperty({
    required: false,
    type: CaseOrderByInput,
  })
  @Field(() => CaseOrderByInput, { nullable: true })
  @Type(() => CaseOrderByInput)
  orderBy?: CaseOrderByInput;

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

export { CaseFindManyArgs };
