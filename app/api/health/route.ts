import { NextResponse } from "next/server";
export function GET() { return NextResponse.json({ status:"ok", service:"web4all.in", timestamp:new Date().toISOString() }); }