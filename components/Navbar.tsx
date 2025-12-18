import { type ReactNode } from "react";

export default function Navbar() {
  return (
    <>
      <nav
        className=" w-full fixed top-0
                        rounded-3xl shadow-2lg
                        bg-white/10  backdrop-blur-sm border border-black
                        text-[#3D3D3D] dark:text-slate-300
                        transiton-all duration-500 z-10000
                         "
      >
        <div className="flex flex-col sm:flex-row  p-3 justify-between items-center">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl hover:text-3xl font-bold leading-tight">
              <a href="/">Resto'Tariq</a>
            </h1>
            <a href="/bookings" className="hover:underline">
              bookings
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
