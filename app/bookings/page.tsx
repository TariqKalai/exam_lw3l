import { getEntries } from "@/lib/crud";

export default async function Page() {
  const entries = await getEntries();
  return (
    <>
      <div>
        <h2 className="text-[14pt] py-5 font-semibold">
          Welcome on Tariqpedia the best website for misinformation
        </h2>
        {/* <div className=" pt-19 grid grid-cols-1 md:grid-cols-2  "> */}
        <div className="flex flex-col gap-4">
          Here is a list of all our current entries:
          {entries.map((entry) => (
            <a
              key={entry.id}
              href={`/bookings/${encodeURIComponent(entry.id)}`}
            >
              <span>{entry.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
