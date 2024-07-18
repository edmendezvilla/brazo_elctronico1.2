import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    // Crear productos utilizando Prisma
    const product1 = await prisma.product.upsert({
      where: { name: 'nombre_producto1' },
      update: {},
      create: {
        name: 'nombre_producto1',
        description: 'Descripción del producto 1',
        amount: '10',   // Ejemplo de cantidad
        price: 100,     // Ejemplo de precio
      },
    });

    const product2 = await prisma.product.upsert({
      where: { name: 'servo' },
      update: {},
      create: {
        name: 'servo',  // This should match the 'where' clause
        description: 'Descripción del producto 2',
        amount: '5',    // Ejemplo de cantidad
        price: 50,      // Ejemplo de precio
      },
    });

    console.log('Productos creados:', { product1, product2 });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    // close Prisma Client at the end
    await prisma.$disconnect();
  }
}

main();
