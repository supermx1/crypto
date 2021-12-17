import { ArgsType, Field } from "@nestjs/graphql";
import { PrivateInvestigatorWhereUniqueInput } from "./PrivateInvestigatorWhereUniqueInput";
import { PrivateInvestigatorUpdateInput } from "./PrivateInvestigatorUpdateInput";

@ArgsType()
class UpdatePrivateInvestigatorArgs {
  @Field(() => PrivateInvestigatorWhereUniqueInput, { nullable: false })
  where!: PrivateInvestigatorWhereUniqueInput;
  @Field(() => PrivateInvestigatorUpdateInput, { nullable: false })
  data!: PrivateInvestigatorUpdateInput;
}

export { UpdatePrivateInvestigatorArgs };
