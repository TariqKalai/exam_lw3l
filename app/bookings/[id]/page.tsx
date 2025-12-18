import Formulary_completed from "@/components/Formulary_completed";

type PageProps = {
  params: Promise<{ id: string }>;
};
export default async function EntryPage({ params }: PageProps) {
  const { id } = await params;

  // 3. RENDER THE PAGE
  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-8">
        <Formulary_completed ids={id} />
      </div>
    </div>
  );
}
