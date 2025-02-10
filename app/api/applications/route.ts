// app/api/applications/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { jobId, name, email, resume, coverLetter } = await req.json();

  const application = await prisma.application.create({
    data: { jobId, name, email, resume, coverLetter },
  });

  return NextResponse.json(application, { status: 201 });
}
