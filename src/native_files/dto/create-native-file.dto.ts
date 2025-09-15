import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateNativeFileDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  companyId?: number;

}
