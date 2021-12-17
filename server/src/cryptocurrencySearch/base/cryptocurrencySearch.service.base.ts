import { PrismaService } from "nestjs-prisma";
import { Prisma, CryptocurrencySearch } from "@prisma/client";

export class CryptocurrencySearchServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CryptocurrencySearchFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CryptocurrencySearchFindManyArgs>
  ): Promise<number> {
    return this.prisma.cryptocurrencySearch.count(args);
  }

  async findMany<T extends Prisma.CryptocurrencySearchFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CryptocurrencySearchFindManyArgs>
  ): Promise<CryptocurrencySearch[]> {
    return this.prisma.cryptocurrencySearch.findMany(args);
  }
  async findOne<T extends Prisma.CryptocurrencySearchFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CryptocurrencySearchFindUniqueArgs>
  ): Promise<CryptocurrencySearch | null> {
    return this.prisma.cryptocurrencySearch.findUnique(args);
  }
  async create<T extends Prisma.CryptocurrencySearchCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CryptocurrencySearchCreateArgs>
  ): Promise<CryptocurrencySearch> {
    return this.prisma.cryptocurrencySearch.create<T>(args);
  }
  async update<T extends Prisma.CryptocurrencySearchUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CryptocurrencySearchUpdateArgs>
  ): Promise<CryptocurrencySearch> {
    return this.prisma.cryptocurrencySearch.update<T>(args);
  }
  async delete<T extends Prisma.CryptocurrencySearchDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CryptocurrencySearchDeleteArgs>
  ): Promise<CryptocurrencySearch> {
    return this.prisma.cryptocurrencySearch.delete(args);
  }
}
