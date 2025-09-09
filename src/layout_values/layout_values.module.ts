import { Module } from '@nestjs/common';
import { LayoutValuesService } from './layout_values.service';
import { LayoutValuesController } from './layout_values.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LayoutValuesController],
  providers: [LayoutValuesService],
})
export class LayoutValuesModule { }
