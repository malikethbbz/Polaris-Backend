import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateLayoutValueDto {
  @IsInt()
  @IsNotEmpty()
  fileId: number;

  @IsInt()
  @IsNotEmpty()
  fieldId: number;

  @IsString()
  @IsNotEmpty()
  value: string;

  @IsInt()
  @IsNotEmpty()
  row: number;
}
