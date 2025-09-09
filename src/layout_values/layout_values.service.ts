import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLayoutValueDto } from './dto/create-layout_value.dto';
import { UpdateLayoutValueDto } from './dto/update-layout_value.dto';

@Injectable()
export class LayoutValuesService {
  constructor(private prisma: PrismaService) { }

  create(dto: CreateLayoutValueDto) {
    return this.prisma.layoutValue.create({
      data: {
        ...dto,
        // definition: dto.definition as any,
      },
    });
  }

  findByFileId(fileId: number) {
    return this.prisma.layoutValue.findMany({
      where: { fileId },
    });
  }


  // findAll() {
  //   return this.prisma.businessRule.findMany({
  //     include: { company: true, category: true, state: true },
  //   });
  // }

  // findOne(id: number) {
  //   return this.prisma.businessRule.findUnique({
  //     where: { id },
  //     include: { company: true, category: true, state: true },
  //   });
  // }

  // update(id: number, dto: UpdateRuleDto) {
  //   return this.prisma.businessRule.update({
  //     where: { id },
  //     data: {
  //       ...dto,
  //       definition: dto.definition as any,
  //     },
  //   });
  // }

  // remove(id: number) {
  //   return this.prisma.businessRule.delete({ where: { id } });
  // }
}
