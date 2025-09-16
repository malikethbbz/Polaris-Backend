import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const adminRole = await prisma.role.upsert({
    where: { name: 'Admin' },
    update: {},
    create: { name: 'Admin' },
  });

  const userRole = await prisma.role.upsert({
    where: { name: 'User' },
    update: {},
    create: { name: 'User' },
  });

  const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'Admin123!';
  const hashed = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { email: 'admin@local.com' },
    update: { password: hashed, roleId: adminRole.id },
    create: {
      firstName: 'Admin',
      lastName1: 'Admin',
      email: 'admin@local.com', // <-- valid email
      password: hashed,
      roleId: adminRole.id,
  },
});


  console.log('Seed finished.');
}

main()
  .catch(console.error)
  .finally(async () => await prisma.$disconnect());
