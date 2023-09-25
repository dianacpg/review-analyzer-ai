import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const DELETE = async (request: Request) => {
  const { id } = await request.json();
  const review = await prisma.review.delete({ where: { id } });
  return NextResponse.json({ data: review });
};
