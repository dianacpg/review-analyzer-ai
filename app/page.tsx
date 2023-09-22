import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? "/entries" : "/new-user";

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div>
        <h1>Review AI Analyzer</h1>
        <p>description</p>
        <Link href={href}>
          <button>get started</button>
        </Link>
      </div>
    </div>
  );
}
