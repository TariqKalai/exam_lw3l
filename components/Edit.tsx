import { editEntry } from "@/lib/crud";

type Entry = {
  // Matches Drizzle uuid().defaultRandom().primaryKey()
  id: string;
  name: string;
  phone: string;
  numberPerson: string;
  date: string;
};

type FormularyProps = {
  entries: Entry;
};
export default function Formulary_edit({ entries }: FormularyProps) {
  const inputClasses = "bg-white p-2 rounded border border-gray-300 w-full";
  const labelClasses = "flex flex-col text-sm font-medium w-full max-w-sm";
  const buttonClass =
    "p-2 rounded-xl border border-blue-500 bg-blue-500/80 text-white hover:bg-blue-600 transition";
  const { id, name, phone, numberPerson, date } = entries;
  return (
    <>
      <form
        action={editEntry}
        className="flex flex-col items-center gap-4 p-4 bg-white/20 rounded-lg"
        key={id}
      >
        <input type="hidden" name="id" value={id} />
        <h2 className="text-2xl font-bold">Modify Entry</h2>

        <label className={labelClasses}>
          Name:
          <input
            name="name"
            defaultValue={name}
            className={inputClasses}
            required
          />
        </label>

        <label className={labelClasses}>
          phone
          <input
            name="phone"
            defaultValue={phone}
            className={inputClasses}
            required
          />
        </label>

        <label className={labelClasses}>
          numberPerson
          <input
            name="numberPerson"
            defaultValue={numberPerson}
            className={inputClasses}
            required
          />
        </label>

        <label className={labelClasses}>
          date
          <textarea
            name="date"
            defaultValue={date}
            className={inputClasses}
            required
          ></textarea>
        </label>

        <button type="submit" className={buttonClass}>
          Modify Entry
        </button>
      </form>
    </>
  );
}
