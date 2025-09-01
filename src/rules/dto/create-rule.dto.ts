import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateRuleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  definition: object; // JSON field

  @IsOptional()
  @IsInt()
  companyId?: number;

  @IsOptional()
  @IsInt()
  categoryId?: number;

  @IsOptional()
  @IsInt()
  stateId?: number;
}
