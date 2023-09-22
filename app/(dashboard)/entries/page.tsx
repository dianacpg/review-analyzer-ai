import EntryCard from "@/components/EntryCard";
import NewEntryCard from "@/components/NewEntryCard";
import { Entry } from "@/types/entries";
import { analyzeEntry } from "@/utils/ai";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import Link from "next/link";

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

  return entries as unknown as Entry[];
};

const EntriesPage = async () => {
  const data = await getEntries();

  return (
    <div>
      <h2>Entries</h2>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {data?.map((entry) => (
          <div key={entry.id}>
            <Link href={`/entries/${entry.id}`}>
              <EntryCard entry={entry} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default EntriesPage;
