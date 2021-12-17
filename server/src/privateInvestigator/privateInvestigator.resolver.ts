import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PrivateInvestigatorResolverBase } from "./base/privateInvestigator.resolver.base";
import { PrivateInvestigator } from "./base/PrivateInvestigator";
import { PrivateInvestigatorService } from "./privateInvestigator.service";

@graphql.Resolver(() => PrivateInvestigator)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PrivateInvestigatorResolver extends PrivateInvestigatorResolverBase {
  constructor(
    protected readonly service: PrivateInvestigatorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
