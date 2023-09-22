import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (request: Request, { params }) => {
  const { title, description } = await request.json();
  const user = await getUserByClerkID();
  if (!user) return;

  const updatedEntry = await prisma.entry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: { title, description },
  });

  return NextResponse.json({ data: updatedEntry });
};
