// Next
import Link from "next/link";
// Components
import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
// Utils
import { prisma } from "@/lib/utils/db";
import { isEntry } from "@/lib/utils/type-guards/entries";
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
      <h1 className="text-2xl text-gray-800 font-semibold">Entries</h1>
      <div className="flex flex-col gap-5">
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
