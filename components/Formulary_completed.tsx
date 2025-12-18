"use client";
import { deleteEntry, getEntryById } from "@/lib/crud";
import { ReactNode, useState } from "react";
import Formulary_edit from "./Edit";

type Entry = {
  id: string;
  name: string;
  phone: string;
  numberPerson: string;
  date: string;
};

type FormularyProps = { entries: Entry };

export default function Formulary_completed({ entries }: FormularyProps) {
  // Destructure exactly the fields from your Drizzle Schema
  const { id, name, phone, numberPerson, date } = entries;
  const [editingId, setEditingId] = useState<string | null>(null);
  let buttoncolor =
    "p-1 rounded-xl border border-black bg-white/40 backdrop-blur text-center hover:bg-amber-200 transition";
  return (
    <article className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
        <div className="p-8 border-b border-gray-200">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            {name}
          </h1>
        </div>

        <div className="p-8 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-emerald-500 inline-block pb-1 mb-4">
              Phone number
            </h2>

            <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
              {phone}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-emerald-500 inline-block pb-1 mb-4">
              Number of people:
            </h2>

            <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
              {numberPerson}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-emerald-500 inline-block pb-1 mb-4">
              Reservation date :
            </h2>
            <div className="text-lg text-gray-800 leading-relaxed whitespace-pre-wrap">
              {date}
            </div>
          </section>
        </div>

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

        {/* Buttons */}
        <div className="flex gap-2 mt-2">
          {/* Delete Button */}
          <form action={deleteEntry}>
            <input type="hidden" name="id" value={id} />
            <button type="submit" className={buttoncolor}>
              Delete
            </button>
          </form>

          {/* Modify Button */}
          <button onClick={() => setEditingId(id)} className={buttoncolor}>
            Modify
          </button>
        </div>

        {editingId === id && <Formulary_edit entries={entries} />}
      </div>
    </article>
  );
}
