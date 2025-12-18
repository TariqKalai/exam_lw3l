import { Children, type ReactNode } from "react";

export default function Footer() {
  return (
    <footer className="w-full mx-auto pt-100 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-xl text-[#3D3D3D] transition-all">
      <div className="flex justify-self-center gap-2  font-medium ">
        <span>© 2025 Kalaï Tariq</span>
      </div>

      <div className="text-center ">
        <h3 className="font-semibold  mb-3">Elsewhere</h3>
        <ul className="space-y-2 ">
          <li>
            <a href="https://github.com/TariqKalai"> Github </a>
          </li>
          <li>
            <a href="."> CV </a>
          </li>
          <li>
            <a href="https://www.aedin.com/in/tariq-kala%C3%AF">aedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
