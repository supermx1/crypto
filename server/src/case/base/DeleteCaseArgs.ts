import { ArgsType, Field } from "@nestjs/graphql";
import { CaseWhereUniqueInput } from "./CaseWhereUniqueInput";

@ArgsType()
class DeleteCaseArgs {
  @Field(() => CaseWhereUniqueInput, { nullable: false })
  where!: CaseWhereUniqueInput;
}

export { DeleteCaseArgs };
