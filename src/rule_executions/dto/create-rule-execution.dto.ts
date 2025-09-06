import { IsNotEmpty, IsOptional, IsString, IsInt, IsEnum } from 'class-validator';


export enum ExecStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

export class CreateRuleExecutionDto {

  @IsInt()
  fileId: number;

  @IsInt()
  ruleId: number;

  @IsEnum(ExecStatus)
  @IsOptional()
  status?: ExecStatus;
}
