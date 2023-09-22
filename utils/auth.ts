// associate clerkId with db id

import { auth } from "@clerk/nextjs";
import { prisma } from "./db";

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
