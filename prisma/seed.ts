import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();
async function main() {
  console.log("🌱 Seeding Project Tanjun...");
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@web4all.in";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "Web4All@Admin2025";
  const adminName = process.env.ADMIN_NAME ?? "Adi";
  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existing) {
    const hash = await bcrypt.hash(adminPassword, 12);
    await prisma.user.create({ data: { name: adminName, email: adminEmail, passwordHash: hash, role: "ADMIN" } });
    console.log("✅ Admin created:", adminEmail);
  }
  const count = await prisma.announcement.count();
  if (count === 0) {
    await prisma.announcement.create({ data: { title:"Welcome to Web4All.in 🎉", body:"We are live! Get your website ready in 24 hours starting at ₹300/month.", isPublished:true, publishedAt:new Date() } });
    console.log("✅ Sample announcement created");
  }
  console.log("✅ Seed complete.");
}
main().catch(e=>{console.error(e);process.exit(1);}).finally(async()=>{await prisma.$disconnect();});