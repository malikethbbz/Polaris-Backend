import { PartialType } from '@nestjs/mapped-types';
import { CreateLayoutValueDto } from './create-layout_value.dto';

export class UpdateLayoutValueDto extends PartialType(CreateLayoutValueDto) { }
