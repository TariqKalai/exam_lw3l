import { boolean, pgTable, text, uuid, date } from "drizzle-orm/pg-core";

export const entryTable = pgTable("entry", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  phone: text("intro").notNull(),
  numberPerson: text("numberPerson").notNull(),
  hour: text("hour").notNull(),
});
