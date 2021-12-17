import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CryptocurrencySearchServiceBase } from "./base/cryptocurrencySearch.service.base";

@Injectable()
export class CryptocurrencySearchService extends CryptocurrencySearchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
