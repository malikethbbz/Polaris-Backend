import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { NativeFileService } from './native_files.service';
import { CreateNativeFileDto } from './dto/create-native-file.dto';

@Controller('native-file')
export class NativeFileController {
  constructor(private readonly nativeFileService: NativeFileService) {}

  @Post()
  create(@Body() dto: CreateNativeFileDto) {
    // console.log("OK");
    // return;
    return this.nativeFileService.create(dto);
  }

  @Get()
  findAll() {
    return this.nativeFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nativeFileService.findOne(+id);
  }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() dto: UpdateRuleDto) {
//     return this.nativeFileService.update(+id, dto);
//   }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nativeFileService.remove(+id);
  }
}
