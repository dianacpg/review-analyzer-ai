import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? "/entries" : "/new-user";

  return (
    <div className="w-screen h-screen bg-light-blue-200 flex flex-col justify-center items-center text-gray-800">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Review AI Analyzer</h1>
        <p className="text-lg mb-6">
          Welcome to the Review AI Analyzer! Share your product or topic
          reviews, and our AI will provide summaries of the good, bad, and areas
          for improvement.
        </p>
        <Link href={href}>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-lg font-semibold">
            Get Started
          </button>
        </Link>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">How it works:</h2>
        <ol className="text-lg text-left list-decimal pl-6">
          <li className="mb-4">
            <span className="text-blue-600">Sign up or sign in</span> to your
            account.
          </li>
          <li className="mb-4">
            <span className="text-blue-600">On your dashboard,</span> create
            topics for review.
          </li>
          <li className="mb-4">
            <span className="text-blue-600">Click on each topic</span> to add
            reviews. Our AI will automatically analyze each review and provide
            insights.
          </li>
        </ol>
      </div>
    </div>
  );
}
