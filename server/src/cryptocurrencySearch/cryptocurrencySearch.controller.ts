import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CryptocurrencySearchService } from "./cryptocurrencySearch.service";
import { CryptocurrencySearchControllerBase } from "./base/cryptocurrencySearch.controller.base";

@swagger.ApiTags("cryptocurrency-searches")
@common.Controller("cryptocurrency-searches")
export class CryptocurrencySearchController extends CryptocurrencySearchControllerBase {
  constructor(
    protected readonly service: CryptocurrencySearchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
