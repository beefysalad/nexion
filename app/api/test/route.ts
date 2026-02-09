import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const data = await prisma.count.findFirst();
    return NextResponse.json({ ...data, message: "Hello from Api v1" });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const updated = await prisma.count.upsert({
      where: { key: "global_counter" },
      update: {
        value: {
          increment: 1,
        },
      },
      create: {
        key: "global_counter",
        value: 1,
      },
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Counter update failed:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
