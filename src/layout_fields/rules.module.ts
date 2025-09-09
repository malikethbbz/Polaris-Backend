import { Module } from '@nestjs/common';
import { LayoutFieldsService } from './layout_fields.service';
import { LayoutFieldsController } from './layout_fields.controller copy';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LayoutFieldsController],
  providers: [LayoutFieldsService],
})
export class LayoutFieldsModule { }
