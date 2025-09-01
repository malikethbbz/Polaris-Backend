import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Crear rol ADMIN si no existe
  const adminRole = await prisma.role.upsert({
    where: { name: 'ADMIN' },
    update: {},
    create: { name: 'ADMIN' },
  });

  // Crear usuario admin
  await prisma.user.upsert({
    where: { email: 'HMtinez@banorte.mx' },
    update: {},
    create: {
      firstName: 'Hector',
      lastName1: 'Martinez',
      email: 'HMtinez@banorte.mx',
      password: await bcrypt.hash('3312', 10),
      roleId: adminRole.id,
    },
  });

  // Crear empresas
  const banorte = await prisma.company.upsert({
    where: { name: 'Banorte' },
    update: {},
    create: { name: 'Banorte' },
  });

  const santander = await prisma.company.upsert({
    where: { name: 'Santander' },
    update: {},
    create: { name: 'Santander' },
  });

  // Crear categorías
  const generalCat = await prisma.category.upsert({
    where: { name: 'General' },
    update: {},
    create: { name: 'General', description: 'Reglas generales del negocio' },
  });

  // Crear estados
  const activeState = await prisma.state.upsert({
    where: { name: 'Activo' },
    update: {},
    create: { name: 'Activo', color: 'green' },
  });

  // Crear reglas de negocio
  await prisma.businessRule.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Validar RFC',
      description: 'La empresa debe tener RFC válido',
      definition: { type: 'regex', pattern: '^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$' },
      companyId: banorte.id,
      categoryId: generalCat.id,
      stateId: activeState.id,
    },
  });

  await prisma.businessRule.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Monto Máximo',
      description: 'El monto no debe superar $1,000,000',
      definition: { type: 'max', value: 1000000 },
      companyId: santander.id,
      categoryId: generalCat.id,
      stateId: activeState.id,
    },
  });

  console.log('✅ Seed completado con usuario, empresas y reglas');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
