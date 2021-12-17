import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { CaseService } from "../case.service";
import { CaseCreateInput } from "./CaseCreateInput";
import { CaseWhereInput } from "./CaseWhereInput";
import { CaseWhereUniqueInput } from "./CaseWhereUniqueInput";
import { CaseFindManyArgs } from "./CaseFindManyArgs";
import { CaseUpdateInput } from "./CaseUpdateInput";
import { Case } from "./Case";
@swagger.ApiBearerAuth()
export class CaseControllerBase {
  constructor(
    protected readonly service: CaseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Case",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Case })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: CaseCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Case> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Case",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Case"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        amount: true,
        blockNumber: true,
        createdAt: true,
        cryptocurrencyType: true,
        fromWallet: true,
        id: true,
        keyPhrase: true,
        privateNote: true,
        status: true,
        timeOfTheft: true,
        toWallet: true,
        transactionHash: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Case",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Case] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => CaseFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Case[]> {
    const args = plainToClass(CaseFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Case",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        amount: true,
        blockNumber: true,
        createdAt: true,
        cryptocurrencyType: true,
        fromWallet: true,
        id: true,
        keyPhrase: true,
        privateNote: true,
        status: true,
        timeOfTheft: true,
        toWallet: true,
        transactionHash: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Case",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Case })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CaseWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Case | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Case",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        amount: true,
        blockNumber: true,
        createdAt: true,
        cryptocurrencyType: true,
        fromWallet: true,
        id: true,
        keyPhrase: true,
        privateNote: true,
        status: true,
        timeOfTheft: true,
        toWallet: true,
        transactionHash: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Case",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Case })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CaseWhereUniqueInput,
    @common.Body()
    data: CaseUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Case | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Case",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Case"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          amount: true,
          blockNumber: true,
          createdAt: true,
          cryptocurrencyType: true,
          fromWallet: true,
          id: true,
          keyPhrase: true,
          privateNote: true,
          status: true,
          timeOfTheft: true,
          toWallet: true,
          transactionHash: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Case",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Case })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CaseWhereUniqueInput
  ): Promise<Case | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          amount: true,
          blockNumber: true,
          createdAt: true,
          cryptocurrencyType: true,
          fromWallet: true,
          id: true,
          keyPhrase: true,
          privateNote: true,
          status: true,
          timeOfTheft: true,
          toWallet: true,
          transactionHash: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
