import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CaseService } from "./case.service";
import { CaseControllerBase } from "./base/case.controller.base";

@swagger.ApiTags("cases")
@common.Controller("cases")
export class CaseController extends CaseControllerBase {
  constructor(
    protected readonly service: CaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
