import { Entry } from "@/types/entries";

const ReviewCard = ({ entry }: { entry: Entry }) => {
  return (
    <div>
      <h1>Title: {entry?.title}</h1>
      <p>Description: {entry?.description}</p>
      <div className="border border-indigo-200">
        <h2>Reviews</h2>
        {entry?.reviews?.map((review) => (
          <div className="border border-indigo-400 m-2" key={review.id}>
            <p>score: {review.score}</p>
            <p>date:{review.createdAt}</p>
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
    </div>
  );
};

export default ReviewCard;
