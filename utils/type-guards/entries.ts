import { Entry } from "@/types/entries";

export const isEntry = (data: unknown): data is Entry => {
  return (
    typeof data === "object" &&
    !!data &&
    "title" in data &&
    "description" in data
  );
};
