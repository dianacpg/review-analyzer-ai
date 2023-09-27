"use client";
// Components
import NewReviewCard from "@/components/NewReviewCard";
import ReviewSection from "@/components/ReviewSection";
// Hooks
import useReviews from "@/hooks/useReviews";
// Types
import { RouteParams } from "@/types/route-params";

const EntryPage = ({ params }: RouteParams) => {
  const { data: entry, isLoading } = useReviews(params.id);

  return (
    <div className="flex flex-col gap-">
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div className="flex flex-col gap-5">
          <NewReviewCard entryId={params.id} />
          <ReviewSection entry={entry.data} />
        </div>
      )}
    </div>
  );
};

export default EntryPage;
