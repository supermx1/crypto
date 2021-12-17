import { Module } from "@nestjs/common";
import { CaseModuleBase } from "./base/case.module.base";
import { CaseService } from "./case.service";
import { CaseController } from "./case.controller";
import { CaseResolver } from "./case.resolver";

@Module({
  imports: [CaseModuleBase],
  controllers: [CaseController],
  providers: [CaseService, CaseResolver],
  exports: [CaseService],
})
export class CaseModule {}
