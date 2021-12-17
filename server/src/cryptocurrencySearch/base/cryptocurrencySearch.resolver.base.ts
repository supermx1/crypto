import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateCryptocurrencySearchArgs } from "./CreateCryptocurrencySearchArgs";
import { UpdateCryptocurrencySearchArgs } from "./UpdateCryptocurrencySearchArgs";
import { DeleteCryptocurrencySearchArgs } from "./DeleteCryptocurrencySearchArgs";
import { CryptocurrencySearchFindManyArgs } from "./CryptocurrencySearchFindManyArgs";
import { CryptocurrencySearchFindUniqueArgs } from "./CryptocurrencySearchFindUniqueArgs";
import { CryptocurrencySearch } from "./CryptocurrencySearch";
import { CryptocurrencySearchService } from "../cryptocurrencySearch.service";

@graphql.Resolver(() => CryptocurrencySearch)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CryptocurrencySearchResolverBase {
  constructor(
    protected readonly service: CryptocurrencySearchService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CryptocurrencySearch",
    action: "read",
    possession: "any",
  })
  async _cryptocurrencySearchesMeta(
    @graphql.Args() args: CryptocurrencySearchFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [CryptocurrencySearch])
  @nestAccessControl.UseRoles({
    resource: "CryptocurrencySearch",
    action: "read",
    possession: "any",
  })
  async cryptocurrencySearches(
    @graphql.Args() args: CryptocurrencySearchFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CryptocurrencySearch[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CryptocurrencySearch",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => CryptocurrencySearch, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CryptocurrencySearch",
    action: "read",
    possession: "own",
  })
  async cryptocurrencySearch(
    @graphql.Args() args: CryptocurrencySearchFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CryptocurrencySearch | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "CryptocurrencySearch",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => CryptocurrencySearch)
  @nestAccessControl.UseRoles({
    resource: "CryptocurrencySearch",
    action: "create",
    possession: "any",
  })
  async createCryptocurrencySearch(
    @graphql.Args() args: CreateCryptocurrencySearchArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CryptocurrencySearch> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "CryptocurrencySearch",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"CryptocurrencySearch"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CryptocurrencySearch)
  @nestAccessControl.UseRoles({
    resource: "CryptocurrencySearch",
    action: "update",
    possession: "any",
  })
  async updateCryptocurrencySearch(
    @graphql.Args() args: UpdateCryptocurrencySearchArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<CryptocurrencySearch | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "CryptocurrencySearch",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"CryptocurrencySearch"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CryptocurrencySearch)
  @nestAccessControl.UseRoles({
    resource: "CryptocurrencySearch",
    action: "delete",
    possession: "any",
  })
  async deleteCryptocurrencySearch(
    @graphql.Args() args: DeleteCryptocurrencySearchArgs
  ): Promise<CryptocurrencySearch | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}