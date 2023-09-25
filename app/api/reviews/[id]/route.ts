import { RouteParams } from "@/types/route-params";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const DELETE = async (request: Request, { params }: RouteParams) => {
  await prisma.analysis.deleteMany({
    where: { reviewId: params.id },
  });
  const review = await prisma.review.delete({ where: { id: params.id } });
  return NextResponse.json({ data: review });
};
