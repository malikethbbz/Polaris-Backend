import { Module } from '@nestjs/common';
import { FileParsersController } from './file_parsers.controller';
import { FileParsersService } from './file_parsers.service';

@Module({
  controllers: [FileParsersController],
  providers: [FileParsersService],
})
export class FileParsersModule {}
