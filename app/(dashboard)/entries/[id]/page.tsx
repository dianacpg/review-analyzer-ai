"use client";
import NewReviewCard from "@/components/NewReviewCard";
import ReviewCard from "@/components/ReviewCard";
import useReviews from "@/hooks/useReviews";
import { RouteParams } from "@/types/route-params";

const EntryPage = ({ params }: RouteParams) => {
  const { data: entry, isLoading } = useReviews(params.id);

  return (
    <div className="border border-indigo-600">
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <ReviewCard entry={entry.data} />
          <NewReviewCard entryId={params.id} />
        </>
      )}
    </div>
  );
};

export default EntryPage;
