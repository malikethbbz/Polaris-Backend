import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      firstName: "Nos",
      lastName1: "Feratu",
      email: "Nosf@banorte.mx",
      password: "Password123",
      roleId: 1,
    },
  });
}

main()
  .then(() => console.log("Seed completado con éxito"))
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
