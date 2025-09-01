import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { CompaniesModule } from './companies/companies.module';
import { RulesModule } from './rules/rules.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    CompaniesModule,
    RulesModule,
  ],
})
export class AppModule {}
