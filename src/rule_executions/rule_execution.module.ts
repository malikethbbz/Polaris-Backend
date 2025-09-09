import { Module } from '@nestjs/common';
import { RuleExecutionService } from './rule_execution.service';
import { RuleExecutionController } from './rule_execution.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RuleExecutionController],
  providers: [RuleExecutionService],
})
export class RuleExecutionsModule { }
