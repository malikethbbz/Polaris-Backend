import { IsString, IsEmail, IsOptional, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsString()
  lastName1: string;

  @IsOptional()
  @IsString()
  lastName2?: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsOptional()
  roleId?: number;
}
