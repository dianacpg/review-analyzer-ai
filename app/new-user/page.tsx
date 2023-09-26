import { prisma } from "@/lib/utils/db";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  });

  if (!match) {
    const newUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
      },
    });
  }

  redirect("/entries");
};

/**
 * NOT SIGNED IN CASE:
 * on "/" click on "get start", it will go to NewUserPage but
 * the middleware is going to intercept it and will direct to SignUp
 * User will signup on SignUp page, then it should redirect to NewUser,
 * and then NewUser will create a new user in the db, and then redirect on
 * new page. This will keep all new users in our db with info from clerk
 */
export default async function NewUser() {
  await createNewUser();
  return <div>hello</div>;
}
