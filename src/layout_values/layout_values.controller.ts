import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { LayoutValuesService } from './layout_values.service';
import { CreateLayoutValueDto } from './dto/create-layout_value.dto';
// import { UpdateRuleDto } from './dto/update-layout_values.dto';

@Controller('layout-values')
export class LayoutValuesController {
  constructor(private readonly layoutValuesService: LayoutValuesService) { }

  @Post()
  create(@Body() dto: CreateLayoutValueDto) {
    return this.layoutValuesService.create(dto);
  }

  @Get('file/:fileId')
  findByFileId(@Param('fileId') fileId: string) {
    return this.layoutValuesService.findByFileId(+fileId);
  }


  // @Get()
  // findAll() {
  //   return this.layoutValuesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.layoutValuesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() dto: UpdateRuleDto) {
  //   return this.layoutValuesService.update(+id, dto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.layoutValuesService.remove(+id);
  // }
}
