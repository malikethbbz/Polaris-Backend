-- DropForeignKey
ALTER TABLE "public"."RuleExecution" DROP CONSTRAINT "RuleExecution_ruleId_fkey";

-- AlterTable
ALTER TABLE "public"."RuleExecution" ALTER COLUMN "ruleId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."RuleExecution" ADD CONSTRAINT "RuleExecution_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "public"."BusinessRule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
