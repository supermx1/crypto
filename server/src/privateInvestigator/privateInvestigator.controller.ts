import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PrivateInvestigatorService } from "./privateInvestigator.service";
import { PrivateInvestigatorControllerBase } from "./base/privateInvestigator.controller.base";

@swagger.ApiTags("private-investigators")
@common.Controller("private-investigators")
export class PrivateInvestigatorController extends PrivateInvestigatorControllerBase {
  constructor(
    protected readonly service: PrivateInvestigatorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
