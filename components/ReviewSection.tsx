"use-client";
import useReviews from "@/hooks/useReviews";
import { Entry } from "@/types/entries";

const ReviewSection = ({ entry }: { entry: Entry }) => {
  const { removeReview } = useReviews(entry.id);

  return (
    <div className="border border-blue-200 rounded-lg p-5">
      <div className="bg-blue-100 border border-blue-400 rounded-lg p-2">
        <h1 className="text-2xl text-center">{entry?.title}</h1>
        <p>
          <b>Description:</b> {entry?.description}
        </p>
      </div>
      <div className="flex flex-col gap-5 py-5">
        <h2 className="text-xl">Reviews: </h2>
        {entry?.reviews?.map((review) => (
          <div
            className="flex flex-col gap-2 border border-blue-400 p-2"
            key={review.id}
          >
            <p>
              <b>Score:</b> {review.score}
            </p>
            <p>
              <b>Date:</b>
              {review.createdAt}
            </p>
            <p>
              <b>Content:</b> {review.content}
            </p>
            <div className="bg-blue-50 p-2 rounded-sm">
              <h2 className="font-bold">Analysis</h2>
              <p>
                <i>Good:</i> {review.analysis?.good || "-"}
              </p>
              <p>
                <i>Bad:</i> {review.analysis?.bad || "-"}
              </p>
              <p>
                <i>Improvements:</i> {review.analysis?.improvements || "-"}
              </p>
            </div>
            <button
              className="bg-slate-200 hover:bg-slate-300 p-2 rounded-md"
              onClick={async () => await removeReview(review.id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
