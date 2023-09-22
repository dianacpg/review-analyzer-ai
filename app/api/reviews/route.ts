import { analyzeEntry } from "@/utils/ai";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { score, content, id } = await request.json();
  const user = await getUserByClerkID();
  if (!user) return;
  const entry = await prisma.review.create({
    data: {
      userId: user.id,
      entryId: id,
      score: parseFloat(score),
      content,
    },
  });

  const analysis = await analyzeEntry(entry.content);

  await prisma.analysis.create({
    data: {
      userId: user.id,
      reviewId: entry.id,
      good: analysis?.good,
      bad: analysis?.bad,
      improvements: analysis?.improvements,
    },
  });

  const path = `/entries/${id}`;
  await revalidatePath(path);
  console.log(entry);
  return NextResponse.json({ data: entry });
};
