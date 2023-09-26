import { RouteParams } from "@/types/route-params";
import { getUserByClerkID } from "@/lib/service/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: RouteParams) => {
  const user = await getUserByClerkID();
  if (!user) return;
  const entry = await prisma.entry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    include: {
      reviews: {
        include: { analysis: true },
      },
    },
  });

  return NextResponse.json({ data: entry });
};
