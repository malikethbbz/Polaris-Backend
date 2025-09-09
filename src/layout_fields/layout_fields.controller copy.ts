import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { LayoutFieldsService } from './layout_fields.service';
// import { CreateRuleDto } from './dto/create-field.dto';
// import { UpdateRuleDto } from './dto/update-rule.dto';

@Controller('layout-fields')
export class LayoutFieldsController {
  constructor(private readonly layoutFieldsService: LayoutFieldsService) { }

  // @Post()
  // create(@Body() dto: CreateRuleDto) {
  //   // console.log("OK");
  //   // return;
  //   return this.rulesService.create(dto);
  // }

  @Get()
  findAll() {
    return this.layoutFieldsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.rulesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() dto: UpdateRuleDto) {
  //   return this.rulesService.update(+id, dto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.rulesService.remove(+id);
  // }
}
