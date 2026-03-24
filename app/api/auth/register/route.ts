import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
const schema = z.object({ name:z.string().min(2), email:z.string().email(), password:z.string().min(8) });
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) return NextResponse.json({ error:"Invalid input" }, { status:400 });
    const existing = await prisma.user.findUnique({ where:{ email:parsed.data.email } });
    if (existing) return NextResponse.json({ error:"Email already registered" }, { status:409 });
    const passwordHash = await bcrypt.hash(parsed.data.password, 12);
    await prisma.user.create({ data:{ name:parsed.data.name, email:parsed.data.email, passwordHash, role:"CUSTOMER" } });
    return NextResponse.json({ success:true }, { status:201 });
  } catch { return NextResponse.json({ error:"Server error" }, { status:500 }); }
}