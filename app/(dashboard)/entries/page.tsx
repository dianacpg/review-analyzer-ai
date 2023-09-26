// Next
import Link from "next/link";
// Components
import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
// Utils
import { prisma } from "@/utils/db";
import { isEntry } from "@/utils/type-guards/entries";
import { getUserByClerkID } from "@/lib/service/auth";

const getEntries = async () => {
  const user = await getUserByClerkID();
  if (!user) return;
  const entries = await prisma.entry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      reviews: true,
    },
  });

  return entries;
};

const EntriesPage = async () => {
  const data = await getEntries();

  return (
    <div>
      <h2>Entries</h2>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {data?.map((entry) => {
          if (!isEntry(entry)) return;
          return (
            <div key={entry.id}>
              <Link href={`/entries/${entry.id}`}>
                <EntryCard entry={entry} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default EntriesPage;
