import { PrismaService } from "nestjs-prisma";
import { Prisma, Case, User } from "@prisma/client";

export class CaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CaseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CaseFindManyArgs>
  ): Promise<number> {
    return this.prisma.case.count(args);
  }

  async findMany<T extends Prisma.CaseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CaseFindManyArgs>
  ): Promise<Case[]> {
    return this.prisma.case.findMany(args);
  }
  async findOne<T extends Prisma.CaseFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CaseFindUniqueArgs>
  ): Promise<Case | null> {
    return this.prisma.case.findUnique(args);
  }
  async create<T extends Prisma.CaseCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CaseCreateArgs>
  ): Promise<Case> {
    return this.prisma.case.create<T>(args);
  }
  async update<T extends Prisma.CaseUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CaseUpdateArgs>
  ): Promise<Case> {
    return this.prisma.case.update<T>(args);
  }
  async delete<T extends Prisma.CaseDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CaseDeleteArgs>
  ): Promise<Case> {
    return this.prisma.case.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.case
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
