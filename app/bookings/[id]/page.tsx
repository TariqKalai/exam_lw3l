export const dynamic = "force-dynamic";
import Formulary_completed from "@/components/Formulary_completed";
import { getEntryById } from "@/lib/crud";

type PageProps = {
  params: Promise<{ id: string }>;
};
export default async function EntryPage({ params }: PageProps) {
  const { id } = await params;
  const entries = await getEntryById(id);
  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-8">
        <Formulary_completed entries={entries} />
      </div>
    </div>
  );
}
