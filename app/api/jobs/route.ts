// app/api/jobs/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const { title, description, category } = await req.json();

  const job = await db.job.create({
    data: { title, description, category },
  });

  return NextResponse.json(job, { status: 201 });
}

// app/api/jobs/route.ts
export async function GET() {
  const jobs = await db.job.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(jobs);
}
