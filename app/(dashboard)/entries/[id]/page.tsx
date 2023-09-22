import NewReviewCard from "@/components/NewReviewCard";
import { Entry } from "@/types/entries";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getEntry = async (id: string) => {
  const user = await getUserByClerkID();
  if (!user) return;
  const entry = await prisma.entry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      reviews: {
        include: { analysis: true },
      },
    },
  });

  return entry as unknown as Entry;
};

const EntryPage = async ({ params }) => {
  const entry: Entry | null | undefined = await getEntry(params.id);

  return (
    <div className="border border-indigo-600">
      <h1>Title: {entry?.title}</h1>
      <p>Description: {entry?.description}</p>
      <div className="border border-indigo-200">
        <h2>Reviews</h2>
        {entry?.reviews?.map((review) => (
          <div className="border border-indigo-400 m-2" key={review.id}>
            <p>score: {review.score}</p>
            <p>date:{review.createdAt.toLocaleDateString()}</p>
            <p>content: {review.content}</p>
            <div>
              <h2>ANALISYS</h2>
              <p>good: {review.analysis?.good || "-"}</p>
              <p>bad: {review.analysis?.bad || "-"}</p>
              <p>improvments: {review.analysis?.improvements || "-"}</p>
            </div>
          </div>
        ))}
      </div>
      <NewReviewCard entryId={params.id} />
    </div>
  );
};

export default EntryPage;
