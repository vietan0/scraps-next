import process from 'node:process';

import { PrismaClient } from '@prisma/client';

// eslint-disable-next-line import/no-mutable-exports
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
}
else {
  const globalWithPrisma = globalThis as typeof globalThis & {
    prisma: PrismaClient;
  };

  if (!globalWithPrisma.prisma)
    globalWithPrisma.prisma = new PrismaClient();

  prisma = globalWithPrisma.prisma;
}

export default prisma;
