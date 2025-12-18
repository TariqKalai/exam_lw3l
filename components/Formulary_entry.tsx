import { createEntry, getEntries } from "@/lib/crud";

export default async function Formulary_entry() {
  let label = "bg-white border-2 rounded-xl p-2 w-full";
  let buttoncolor =
    "p-1  rounded-xl border  bg-white/40 backdrop-blur text-center hover:bg-amber-200/20 transition";
  return (
    <>
      {/* CREATE NEW ENTRY */}
      <button className="absolute top-3 right-3 text-gray-500 hover:text-black">
        <a href="/">✕</a>
      </button>

      <form
        action={createEntry}
        className="grid grid-cols-1 gap-4 items-center p-4"
      >
        <h2 className="text-2xl">Reserve a sitting</h2>

        <label className="py-3">
          <div>Full Name</div>
          <input required name="name" className={label} />
        </label>

        <label>
          <div>Phone number</div>
          <textarea required name="phone" className={label} />
        </label>
        <label>
          <div>Number of people</div>
          <textarea required name="numberPerson" className={label} />
        </label>

        <label>
          <div>Date (DD/MM/YY)</div>
          <textarea required name="date" className={label} />
        </label>

        <button type="submit" className={buttoncolor}>
          Submit
        </button>
      </form>
    </>
  );
}
