import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json({ totalRevenue:0, totalOrders:0 }); }