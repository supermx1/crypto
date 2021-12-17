import { ArgsType, Field } from "@nestjs/graphql";
import { CaseWhereUniqueInput } from "./CaseWhereUniqueInput";
import { CaseUpdateInput } from "./CaseUpdateInput";

@ArgsType()
class UpdateCaseArgs {
  @Field(() => CaseWhereUniqueInput, { nullable: false })
  where!: CaseWhereUniqueInput;
  @Field(() => CaseUpdateInput, { nullable: false })
  data!: CaseUpdateInput;
}

export { UpdateCaseArgs };
