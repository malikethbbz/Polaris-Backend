import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNativeFileDto } from './dto/create-native-file.dto';

@Injectable()
export class NativeFileService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateNativeFileDto) {
    return this.prisma.fileBanorte.create({
      data: {
        ...dto,
      },
    });
  }

  findAll() {
    return this.prisma.fileBanorte.findMany({
      include: { company: true},
    });
  }

  findOne(id: number) {
    return this.prisma.fileBanorte.findUnique({
      where: { id },
      include: { company: true },
    });
  }

//   update(id: number, dto: UpdateRuleDto) {
//     return this.prisma.businessRule.update({
//       where: { id },
//       data: {
//         ...dto,
//         definition: dto.definition as any,
//       },
//     });
//   }

  remove(id: number) {
    return this.prisma.fileBanorte.delete({ where: { id } });
  }
}
