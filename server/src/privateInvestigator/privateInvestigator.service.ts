import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PrivateInvestigatorServiceBase } from "./base/privateInvestigator.service.base";

@Injectable()
export class PrivateInvestigatorService extends PrivateInvestigatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
