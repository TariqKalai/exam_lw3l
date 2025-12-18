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
    .where(eq(entryTable.id, idToFind))
    .limit(1); // Optimization: stop searching after finding one

  // Drizzle always returns an array (e.g., [ { entry } ]).
  // We return the first item, or undefined if not found.
  return result[0];
}

export async function createEntry(form: FormData) {
  await db.insert(entryTable).values({
    name: String(form.get("name")),
    phone: String(form.get("phone")),
    numberPerson: String(form.get("numberPerson")),
    hour: String(form.get("hour")),
  });
  redirect((await headers()).get("referer") ?? "/");
}

export async function editEntry(form: FormData) {
  const id = String(form.get("id"));

  await db
    .update(entryTable)
    .set({
      name: String(form.get("name")),
      phone: String(form.get("phone")),
      numberPerson: String(form.get("numberPerson")),
      hour: String(form.get("hour")),
    })
    .where(eq(entryTable.id, id));
  redirect((await headers()).get("referer") ?? "/");
}

export async function deleteEntry(form: FormData) {
  const id = String(form.get("id"));
  await db.delete(entryTable).where(eq(entryTable.id, id));
  redirect((await headers()).get("referer") ?? "/");
}
