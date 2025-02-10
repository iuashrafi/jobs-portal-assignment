// app/api/jobs/[id]/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const job = await db.job.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!job)
    return NextResponse.json({ error: "Job not found" }, { status: 404 });

  return NextResponse.json(job);
}
