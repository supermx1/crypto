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
import { PrivateInvestigatorService } from "../privateInvestigator.service";
import { PrivateInvestigatorCreateInput } from "./PrivateInvestigatorCreateInput";
import { PrivateInvestigatorWhereInput } from "./PrivateInvestigatorWhereInput";
import { PrivateInvestigatorWhereUniqueInput } from "./PrivateInvestigatorWhereUniqueInput";
import { PrivateInvestigatorFindManyArgs } from "./PrivateInvestigatorFindManyArgs";
import { PrivateInvestigatorUpdateInput } from "./PrivateInvestigatorUpdateInput";
import { PrivateInvestigator } from "./PrivateInvestigator";
@swagger.ApiBearerAuth()
export class PrivateInvestigatorControllerBase {
  constructor(
    protected readonly service: PrivateInvestigatorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "PrivateInvestigator",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: PrivateInvestigator })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: PrivateInvestigatorCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PrivateInvestigator> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "PrivateInvestigator",
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
        `providing the properties: ${properties} on ${"PrivateInvestigator"} creation is forbidden for roles: ${roles}`
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
        code: true,
        companyName: true,
        companyRegistrationId: true,
        createdAt: true,
        cyberSecurityExpert: true,
        fraudInvestigationNumber: true,
        id: true,
        image: true,
        investigatorEmail: true,
        investigatorName: true,
        updatedAt: true,

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
    resource: "PrivateInvestigator",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [PrivateInvestigator] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => PrivateInvestigatorFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PrivateInvestigator[]> {
    const args = plainToClass(PrivateInvestigatorFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PrivateInvestigator",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        code: true,
        companyName: true,
        companyRegistrationId: true,
        createdAt: true,
        cyberSecurityExpert: true,
        fraudInvestigationNumber: true,
        id: true,
        image: true,
        investigatorEmail: true,
        investigatorName: true,
        updatedAt: true,

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
    resource: "PrivateInvestigator",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: PrivateInvestigator })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PrivateInvestigatorWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PrivateInvestigator | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "PrivateInvestigator",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        code: true,
        companyName: true,
        companyRegistrationId: true,
        createdAt: true,
        cyberSecurityExpert: true,
        fraudInvestigationNumber: true,
        id: true,
        image: true,
        investigatorEmail: true,
        investigatorName: true,
        updatedAt: true,

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
    resource: "PrivateInvestigator",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: PrivateInvestigator })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PrivateInvestigatorWhereUniqueInput,
    @common.Body()
    data: PrivateInvestigatorUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PrivateInvestigator | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "PrivateInvestigator",
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
        `providing the properties: ${properties} on ${"PrivateInvestigator"} update is forbidden for roles: ${roles}`
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
          code: true,
          companyName: true,
          companyRegistrationId: true,
          createdAt: true,
          cyberSecurityExpert: true,
          fraudInvestigationNumber: true,
          id: true,
          image: true,
          investigatorEmail: true,
          investigatorName: true,
          updatedAt: true,

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
    resource: "PrivateInvestigator",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: PrivateInvestigator })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PrivateInvestigatorWhereUniqueInput
  ): Promise<PrivateInvestigator | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          code: true,
          companyName: true,
          companyRegistrationId: true,
          createdAt: true,
          cyberSecurityExpert: true,
          fraudInvestigationNumber: true,
          id: true,
          image: true,
          investigatorEmail: true,
          investigatorName: true,
          updatedAt: true,

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
