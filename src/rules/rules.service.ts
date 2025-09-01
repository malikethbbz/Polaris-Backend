import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';

@Injectable()
export class RulesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateRuleDto) {
    return this.prisma.businessRule.create({
      data: {
        ...dto,
        definition: dto.definition as any, // Prisma Json type
      },
    });
  }

  findAll() {
    return this.prisma.businessRule.findMany({
      include: { company: true, category: true, state: true },
    });
  }

  findOne(id: number) {
    return this.prisma.businessRule.findUnique({
      where: { id },
      include: { company: true, category: true, state: true },
    });
  }

  update(id: number, dto: UpdateRuleDto) {
    return this.prisma.businessRule.update({
      where: { id },
      data: {
        ...dto,
        definition: dto.definition as any,
      },
    });
  }

  remove(id: number) {
    return this.prisma.businessRule.delete({ where: { id } });
  }
}
