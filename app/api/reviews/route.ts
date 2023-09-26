import { analyzeEntry } from "@/lib/service/ai";
import { getUserByClerkID } from "@/lib/service/auth";
import { prisma } from "@/lib/utils/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
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

  return NextResponse.json({ data: entry });
};
