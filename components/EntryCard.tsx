import { Entry } from "@/types/entries";

interface EntryCardProps {
  entry: Entry;
}

const EntryCard = ({ entry }: EntryCardProps) => {
  return (
    <div
      className="overflow-hidden rounded-lg
     bg-gray-100 border
     shadow-inner p-5 cursor-pointer"
    >
      <h3>
        <b>Title:</b> {entry.title}
      </h3>
      <p>
        <b>Created at:</b> {entry.createdAt.toLocaleDateString()}
      </p>
      <p>
        <b>Reviews:</b> {entry.reviews?.length}
      </p>
    </div>
  );
};

export default EntryCard;
