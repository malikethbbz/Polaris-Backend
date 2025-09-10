import { Controller, Post, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileParsersService } from './file_parsers.service';

@Controller('file-parsers')
export class FileParsersController {
  constructor(private readonly fileParsersService: FileParsersService) {}

  @Post('parse')
  @UseInterceptors(FileInterceptor('file'))
  async parseFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No se recibió ningún archivo');
    }
    const parsedData = await this.fileParsersService.parseFile(file);
    return parsedData;
  }
}
