import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRuleExecutionDto } from './dto/create-rule-execution.dto';

@Injectable()
export class RuleExecutionService {
  constructor(private prisma: PrismaService) { }

  create(dto: CreateRuleExecutionDto) {
    return this.prisma.ruleExecution.create({
      data: {
        fileId: dto.fileId,
        ruleId: dto.ruleId, // si viene undefined, se manda null
        status: dto.status
      },
    });
  }

  findAll() {
    return this.prisma.ruleExecution.findMany({
      // include: { company: true, category: true, state: true },
    });
  }

  findOne(id: number) {
    return this.prisma.ruleExecution.findUnique({
      where: { id },
      // include: { company: true, category: true, state: true },
    });
  }

  // update(id: number, dto: UpdateRuleDto) {
  //   return this.prisma.businessRule.update({
  //     where: { id },
  //     data: {
  //       ...dto,
  //       definition: dto.definition as any,
  //     },
  //   });
  // }

  remove(id: number) {
    return this.prisma.ruleExecution.delete({ where: { id } });
  }
}
