import { ArgsType, Field } from "@nestjs/graphql";
import { CaseCreateInput } from "./CaseCreateInput";

@ArgsType()
class CreateCaseArgs {
  @Field(() => CaseCreateInput, { nullable: false })
  data!: CaseCreateInput;
}

export { CreateCaseArgs };
