import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CryptocurrencySearchResolverBase } from "./base/cryptocurrencySearch.resolver.base";
import { CryptocurrencySearch } from "./base/CryptocurrencySearch";
import { CryptocurrencySearchService } from "./cryptocurrencySearch.service";

@graphql.Resolver(() => CryptocurrencySearch)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CryptocurrencySearchResolver extends CryptocurrencySearchResolverBase {
  constructor(
    protected readonly service: CryptocurrencySearchService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
