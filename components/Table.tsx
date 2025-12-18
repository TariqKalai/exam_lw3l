import { getEntries } from "@/lib/crud";

export default async function Table() {
  const entries = await getEntries();
  return (
    <>
      <div className="grid grid-cols-5 divide-x border-b-2 text-center">
        <div>Name</div>
        <div>Phone</div>
        <div>Number of people</div>
        <div>Date</div>
        <div>Link</div>
      </div>
      {entries.map((entry) => (
        <div
          className="grid grid-cols-5 gap-y-5 text-center border-b-2 py-5 "
          key={entry.id}
        >
          <div className="font-bold">{entry.name}</div>
          <div>{entry.phone}</div>
          <div>{entry.numberPerson}</div>
          <div>{entry.date}</div>
          <div className="button">
            <a
              key={entry.id}
              href={`/bookings/${encodeURIComponent(entry.id)}`}
            >
              Edit/delete
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
