import { ArgsType, Field } from "@nestjs/graphql";
import { CaseWhereUniqueInput } from "./CaseWhereUniqueInput";

@ArgsType()
class CaseFindUniqueArgs {
  @Field(() => CaseWhereUniqueInput, { nullable: false })
  where!: CaseWhereUniqueInput;
}

export { CaseFindUniqueArgs };
