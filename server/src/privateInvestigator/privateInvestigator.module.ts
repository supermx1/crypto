import { Module } from "@nestjs/common";
import { PrivateInvestigatorModuleBase } from "./base/privateInvestigator.module.base";
import { PrivateInvestigatorService } from "./privateInvestigator.service";
import { PrivateInvestigatorController } from "./privateInvestigator.controller";
import { PrivateInvestigatorResolver } from "./privateInvestigator.resolver";

@Module({
  imports: [PrivateInvestigatorModuleBase],
  controllers: [PrivateInvestigatorController],
  providers: [PrivateInvestigatorService, PrivateInvestigatorResolver],
  exports: [PrivateInvestigatorService],
})
export class PrivateInvestigatorModule {}
