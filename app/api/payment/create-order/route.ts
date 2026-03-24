import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  return NextResponse.json({ message:"Payment order creation — paste full implementation from Project Tanjun artifacts" }, { status:200 });
}