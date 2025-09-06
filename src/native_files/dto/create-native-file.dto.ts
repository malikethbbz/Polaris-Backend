import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateNativeFileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  definition: object; 

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
