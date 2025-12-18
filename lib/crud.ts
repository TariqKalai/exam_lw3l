"use server";

import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { entryTable } from "../db/schema";
import { db } from ".";

export async function getEntries() {
  return db.select().from(entryTable);
}
export async function getEntryById(idToFind: string) {
  const result = await db
    .select()
    .from(entryTable)
    .where(eq(entryTable.title, idToFind))
    .limit(1); // Optimization: stop searching after finding one

  // Drizzle always returns an array (e.g., [ { entry } ]).
  // We return the first item, or undefined if not found.
  return result[0];
}

export async function createEntry(form: FormData) {
  await db.insert(entryTable).values({
    title: String(form.get("title")),
    intro: String(form.get("intro")),
    description: String(form.get("description")),
    history: String(form.get("history")),
  });
  redirect((await headers()).get("referer") ?? "/");
}

export async function editEntry(form: FormData) {
  const id = String(form.get("id"));

  await db
    .update(entryTable)
    .set({
      title: String(form.get("title")),
      intro: String(form.get("intro")),
      description: String(form.get("description")),
      history: String(form.get("history")),
    })
    .where(eq(entryTable.id, id));
  redirect((await headers()).get("referer") ?? "/");
}

export async function deleteEntry(form: FormData) {
  const id = String(form.get("id"));
  await db.delete(entryTable).where(eq(entryTable.id, id));
  redirect((await headers()).get("referer") ?? "/");
}
