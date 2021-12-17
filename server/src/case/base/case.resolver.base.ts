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
import { CreateCaseArgs } from "./CreateCaseArgs";
import { UpdateCaseArgs } from "./UpdateCaseArgs";
import { DeleteCaseArgs } from "./DeleteCaseArgs";
import { CaseFindManyArgs } from "./CaseFindManyArgs";
import { CaseFindUniqueArgs } from "./CaseFindUniqueArgs";
import { Case } from "./Case";
import { User } from "../../user/base/User";
import { CaseService } from "../case.service";

@graphql.Resolver(() => Case)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CaseResolverBase {
  constructor(
    protected readonly service: CaseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Case",
    action: "read",
    possession: "any",
  })
  async _casesMeta(
    @graphql.Args() args: CaseFindManyArgs
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

  @graphql.Query(() => [Case])
  @nestAccessControl.UseRoles({
    resource: "Case",
    action: "read",
    possession: "any",
  })
  async cases(
    @graphql.Args() args: CaseFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Case[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Case",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Case, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Case",
    action: "read",
    possession: "own",
  })
  async case(
    @graphql.Args() args: CaseFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Case | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Case",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Case)
  @nestAccessControl.UseRoles({
    resource: "Case",
    action: "create",
    possession: "any",
  })
  async createCase(
    @graphql.Args() args: CreateCaseArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Case> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Case",
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
        `providing the properties: ${properties} on ${"Case"} creation is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Case)
  @nestAccessControl.UseRoles({
    resource: "Case",
    action: "update",
    possession: "any",
  })
  async updateCase(
    @graphql.Args() args: UpdateCaseArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Case | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Case",
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
        `providing the properties: ${properties} on ${"Case"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Case)
  @nestAccessControl.UseRoles({
    resource: "Case",
    action: "delete",
    possession: "any",
  })
  async deleteCase(@graphql.Args() args: DeleteCaseArgs): Promise<Case | null> {
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
    resource: "Case",
    action: "read",
    possession: "any",
  })
  async user(
    @graphql.Parent() parent: Case,
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
