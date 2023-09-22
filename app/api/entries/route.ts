import { analyzeEntry } from "@/utils/ai";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { title, description } = await request.json();
  const user = await getUserByClerkID();
  if (!user) return;
  const entry = await prisma.entry.create({
    data: {
      userId: user.id,
      title,
      description,
    },
  });
  const path = "/entries/";
  await revalidatePath(path);
  return NextResponse.json({ data: entry });
};
