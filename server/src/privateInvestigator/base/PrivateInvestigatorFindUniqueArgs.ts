import { ArgsType, Field } from "@nestjs/graphql";
import { PrivateInvestigatorWhereUniqueInput } from "./PrivateInvestigatorWhereUniqueInput";

@ArgsType()
class PrivateInvestigatorFindUniqueArgs {
  @Field(() => PrivateInvestigatorWhereUniqueInput, { nullable: false })
  where!: PrivateInvestigatorWhereUniqueInput;
}

export { PrivateInvestigatorFindUniqueArgs };
