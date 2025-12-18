"use server";

import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { formularytable } from "../db/schema";
import { db } from ".";

export async function getEntries() {
  return db.select().from(formularytable);
}
export async function getEntryById(idToFind: string) {
  const result = await db
    .select()
    .from(formularytable)
    .where(eq(formularytable.id, idToFind))
    .limit(1); // Optimization: stop searching after finding one

  // Drizzle always returns an array (e.g., [ { entry } ]).
  // We return the first item, or undefined if not found.
  return result[0];
}

export async function createEntry(form: FormData) {
  await db.insert(formularytable).values({
    name: String(form.get("name")),
    phone: String(form.get("phone")),
    numberPerson: String(form.get("numberPerson")),
    date: String(form.get("date")),
  });
  redirect((await headers()).get("referer") ?? "/");
}

export async function editEntry(form: FormData) {
  const id = String(form.get("id"));

  await db
    .update(formularytable)
    .set({
      name: String(form.get("name")),
      phone: String(form.get("phone")),
      numberPerson: String(form.get("numberPerson")),
      date: String(form.get("date")),
    })
    .where(eq(formularytable.id, id));
  redirect((await headers()).get("referer") ?? "/");
}

export async function deleteEntry(form: FormData) {
  const id = String(form.get("id"));
  await db.delete(formularytable).where(eq(formularytable.id, id));
  redirect("/bookings");
}
