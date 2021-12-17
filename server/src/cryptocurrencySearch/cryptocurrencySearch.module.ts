import { Module } from "@nestjs/common";
import { CryptocurrencySearchModuleBase } from "./base/cryptocurrencySearch.module.base";
import { CryptocurrencySearchService } from "./cryptocurrencySearch.service";
import { CryptocurrencySearchController } from "./cryptocurrencySearch.controller";
import { CryptocurrencySearchResolver } from "./cryptocurrencySearch.resolver";

@Module({
  imports: [CryptocurrencySearchModuleBase],
  controllers: [CryptocurrencySearchController],
  providers: [CryptocurrencySearchService, CryptocurrencySearchResolver],
  exports: [CryptocurrencySearchService],
})
export class CryptocurrencySearchModule {}
