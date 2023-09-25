import { Entry } from "@/types/entries";

interface EntryCardProps {
  entry: Entry;
}

const EntryCard = ({ entry }: EntryCardProps) => {
  return (
    <div className="border border-indigo-600">
      <h2>Title: {entry.title}</h2>
      <p>Created at: {entry.createdAt}</p>
      <p>Reviews: {entry.reviews?.length || 0}</p>
    </div>
  );
};

export default EntryCard;
