export const dynamic = "force-dynamic";
import Table from "@/components/Table";
import { getEntries } from "@/lib/crud";

export default async function Page() {
  return (
    <>
      <div>
        <h2 className="text-[18pt] font-bold py-5 ">
          Here are our current Reservations :
        </h2>

        <Table />
      </div>
    </>
  );
}
