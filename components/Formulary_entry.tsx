import { createEntry, getEntries } from "@/lib/crud";

export default async function Formulary_entry() {
  const entries = await getEntries();
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
          <div>Name</div>
          <input required name="name" className={label} />
        </label>

        <label>
          <div>phone</div>
          <textarea required name="phone" className={label} />
        </label>
        <label>
          <div>numberPerson</div>
          <textarea required name="numberPerson" className={label} />
        </label>

        <label>
          <div>hour</div>
          <textarea required name="hour" className={label} />
        </label>

        <button type="submit" className={buttoncolor}>
          Submit
        </button>
      </form>
    </>
  );
}
