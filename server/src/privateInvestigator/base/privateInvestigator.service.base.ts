import { PrismaService } from "nestjs-prisma";
import { Prisma, PrivateInvestigator } from "@prisma/client";

export class PrivateInvestigatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PrivateInvestigatorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrivateInvestigatorFindManyArgs>
  ): Promise<number> {
    return this.prisma.privateInvestigator.count(args);
  }

  async findMany<T extends Prisma.PrivateInvestigatorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrivateInvestigatorFindManyArgs>
  ): Promise<PrivateInvestigator[]> {
    return this.prisma.privateInvestigator.findMany(args);
  }
  async findOne<T extends Prisma.PrivateInvestigatorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrivateInvestigatorFindUniqueArgs>
  ): Promise<PrivateInvestigator | null> {
    return this.prisma.privateInvestigator.findUnique(args);
  }
  async create<T extends Prisma.PrivateInvestigatorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrivateInvestigatorCreateArgs>
  ): Promise<PrivateInvestigator> {
    return this.prisma.privateInvestigator.create<T>(args);
  }
  async update<T extends Prisma.PrivateInvestigatorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrivateInvestigatorUpdateArgs>
  ): Promise<PrivateInvestigator> {
    return this.prisma.privateInvestigator.update<T>(args);
  }
  async delete<T extends Prisma.PrivateInvestigatorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrivateInvestigatorDeleteArgs>
  ): Promise<PrivateInvestigator> {
    return this.prisma.privateInvestigator.delete(args);
  }
}
