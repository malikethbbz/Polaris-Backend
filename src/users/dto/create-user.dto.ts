import { IsEmail, IsInt, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString() firstName: string;
  @IsOptional() @IsString() middleName?: string;
  @IsString() lastName1: string;
  @IsOptional() @IsString() lastName2?: string;

  @IsEmail() email: string;
  @MinLength(8) @IsString() password: string;

  @IsInt() roleId: number;
}
