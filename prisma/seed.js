const { PrismaClient } = require('../lib/generated/prisma'); // adjust path if needed
const prisma = new PrismaClient();

async function main() {
  const now = new Date();

  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      firstName: "Admin",
      lastName: "User",
      name: "Admin User",
      email: "admin@example.com",
      emailVerified: true,
      role: "ADMIN",
      createdAt: now,
      updatedAt: now,
    },
  });

  await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      firstName: "Regular",
      lastName: "User",
      name: "Regular User",
      email: "user@example.com",
      emailVerified: true,
      role: "USER",
      createdAt: now,
      updatedAt: now,
    },
  });

  console.log("Seed data created ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
