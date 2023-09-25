import { createNewReview, deleteReview } from "@/utils/api";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useReviews(entryId: string) {
  const { data, isLoading, mutate } = useSWR(
    `/api/entries/${entryId}`,
    fetcher
  );

  const addNewReview = async (formData: { score: string; content: string }) => {
    await createNewReview(formData, entryId);
    mutate();
  };

  const removeReview = async (id: string) => {
    await deleteReview(id);
    mutate();
  };

  return { data, isLoading, addNewReview, removeReview };
}
