import { ArgsType, Field } from "@nestjs/graphql";
import { PrivateInvestigatorCreateInput } from "./PrivateInvestigatorCreateInput";

@ArgsType()
class CreatePrivateInvestigatorArgs {
  @Field(() => PrivateInvestigatorCreateInput, { nullable: false })
  data!: PrivateInvestigatorCreateInput;
}

export { CreatePrivateInvestigatorArgs };
