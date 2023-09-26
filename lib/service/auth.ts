// associate clerkId with db id

import { prisma } from "@/lib/utils/db";
import { auth } from "@clerk/nextjs";

export const getUserByClerkID = async () => {
  const { userId } = await auth();
  if (!userId) return;
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  });

  return user;
};
