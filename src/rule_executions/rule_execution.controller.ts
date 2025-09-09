import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { RuleExecutionService } from './rule_execution.service';
import { CreateRuleExecutionDto } from './dto/create-rule-execution.dto';

@Controller('file-executions')
export class RuleExecutionController {
  constructor(private readonly rulesService: RuleExecutionService) { }

  @Post()
  create(@Body() dto: CreateRuleExecutionDto) {
    return this.rulesService.create(dto);
  }

  @Get()
  findAll() {
    return this.rulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rulesService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() dto: UpdateRuleDto) {
  //   return this.rulesService.update(+id, dto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rulesService.remove(+id);
  }
}
