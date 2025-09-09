import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateNativeFileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsInt()
  companyId?: number;

}
