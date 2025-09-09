import { Module } from '@nestjs/common';
import { NativeFileService } from './native_files.service';
import { NativeFileController } from './native_files.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NativeFileController],
  providers: [NativeFileService],
})
export class NativeFilesModule { }
