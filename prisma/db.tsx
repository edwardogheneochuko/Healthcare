// src/prisma/db.ts
import { PrismaClient } from '@prisma/client';

declare global {
  // allow global `prisma` in dev without TS errors
  var prisma: PrismaClient | undefined;
}

export const db =
  global.prisma ||
  new PrismaClient({
    log: ['query'], // optional, for debugging
  });

if (process.env.NODE_ENV !== 'production') global.prisma = db;

export default db;
