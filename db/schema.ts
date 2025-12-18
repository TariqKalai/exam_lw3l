import { boolean, pgTable, text, uuid, date } from "drizzle-orm/pg-core";

export const entryTable = pgTable("entry", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  intro: text("intro").notNull(),
  description: text("description").notNull(),
  history: text("history").notNull(),
});
