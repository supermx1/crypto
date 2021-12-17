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
import { CreatePrivateInvestigatorArgs } from "./CreatePrivateInvestigatorArgs";
import { UpdatePrivateInvestigatorArgs } from "./UpdatePrivateInvestigatorArgs";
import { DeletePrivateInvestigatorArgs } from "./DeletePrivateInvestigatorArgs";
import { PrivateInvestigatorFindManyArgs } from "./PrivateInvestigatorFindManyArgs";
import { PrivateInvestigatorFindUniqueArgs } from "./PrivateInvestigatorFindUniqueArgs";
import { PrivateInvestigator } from "./PrivateInvestigator";
import { User } from "../../user/base/User";
import { PrivateInvestigatorService } from "../privateInvestigator.service";

@graphql.Resolver(() => PrivateInvestigator)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PrivateInvestigatorResolverBase {
  constructor(
    protected readonly service: PrivateInvestigatorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PrivateInvestigator",
    action: "read",
    possession: "any",
  })
  async _privateInvestigatorsMeta(
    @graphql.Args() args: PrivateInvestigatorFindManyArgs
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

  @graphql.Query(() => [PrivateInvestigator])
  @nestAccessControl.UseRoles({
    resource: "PrivateInvestigator",
    action: "read",
    possession: "any",
  })
  async privateInvestigators(
    @graphql.Args() args: PrivateInvestigatorFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PrivateInvestigator[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PrivateInvestigator",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => PrivateInvestigator, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PrivateInvestigator",
    action: "read",
    possession: "own",
  })
  async privateInvestigator(
    @graphql.Args() args: PrivateInvestigatorFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PrivateInvestigator | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "PrivateInvestigator",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => PrivateInvestigator)
  @nestAccessControl.UseRoles({
    resource: "PrivateInvestigator",
    action: "create",
    possession: "any",
  })
  async createPrivateInvestigator(
    @graphql.Args() args: CreatePrivateInvestigatorArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PrivateInvestigator> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "PrivateInvestigator",
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
        `providing the properties: ${properties} on ${"PrivateInvestigator"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => PrivateInvestigator)
  @nestAccessControl.UseRoles({
    resource: "PrivateInvestigator",
    action: "update",
    possession: "any",
  })
  async updatePrivateInvestigator(
    @graphql.Args() args: UpdatePrivateInvestigatorArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PrivateInvestigator | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "PrivateInvestigator",
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
        `providing the properties: ${properties} on ${"PrivateInvestigator"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => PrivateInvestigator)
  @nestAccessControl.UseRoles({
    resource: "PrivateInvestigator",
    action: "delete",
    possession: "any",
  })
  async deletePrivateInvestigator(
    @graphql.Args() args: DeletePrivateInvestigatorArgs
  ): Promise<PrivateInvestigator | null> {
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

  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PrivateInvestigator",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: PrivateInvestigator,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
