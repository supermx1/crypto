import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CaseServiceBase } from "./base/case.service.base";

@Injectable()
export class CaseService extends CaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
