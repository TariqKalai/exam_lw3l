import { getEntryById } from "@/lib/crud";
import { title } from "process";
import { ReactNode } from "react";

type FormularyProps = { ids: string };

export default async function Formulary_completed({ ids }: FormularyProps) {
  // Destructure exactly the fields from your Drizzle Schema
  const entries = await getEntryById(ids);
  const { id, name, phone, numberPerson, hour } = entries;

  const sectionHeaderClass =
    "text-2xl font-serif font-bold pb-1 border-b border-gray-300 mt-8 mb-4";
  const paragraphClass = "text-lg leading-relaxed mb-4 text-gray-800";
  return (
    <article className="min-h-screen bg-gray-50 py-10">
      {/* MAIN CONTAINER: Centered, white paper look, subtle shadow */}
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        {/* 1. HEADER SECTION */}
        <div className="p-8 border-b border-gray-200">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            {name}
          </h1>
          {/* Intro is often slightly larger or italicized to stand out as a summary
          <div className="text-xl text-gray-600 font-light leading-relaxed italic">
            {name}
          </div> */}
        </div>

        {/* 2. CONTENT BODY */}
        <div className="p-8 space-y-10">
          {/* Description Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-emerald-500 inline-block pb-1 mb-4">
              Phone number
            </h2>
            {/* We use whitespace-pre-wrap so that new lines in your DB show up as paragraphs */}
            <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
              {phone}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-emerald-500 inline-block pb-1 mb-4">
              Number of people:
            </h2>
            {/* We use whitespace-pre-wrap so that new lines in your DB show up as paragraphs */}
            <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
              {numberPerson}
            </div>
          </section>

          {/* History Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-emerald-500 inline-block pb-1 mb-4">
              Reservation hour :
            </h2>
            <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
              {hour}
            </div>
          </section>
        </div>

        {/* 3. FOOTER */}
        <div className="bg-gray-50 p-6 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
          <p>
            Entry ID: <span className="font-mono text-xs">{id}</span>
          </p>
          <a
            href="/"
            className="text-emerald-600 font-semibold hover:underline"
          >
            &larr; Back to Home
          </a>
        </div>
      </div>
    </article>
  );
}
