import { ArgsType, Field } from "@nestjs/graphql";
import { PrivateInvestigatorWhereUniqueInput } from "./PrivateInvestigatorWhereUniqueInput";

@ArgsType()
class DeletePrivateInvestigatorArgs {
  @Field(() => PrivateInvestigatorWhereUniqueInput, { nullable: false })
  where!: PrivateInvestigatorWhereUniqueInput;
}

export { DeletePrivateInvestigatorArgs };
