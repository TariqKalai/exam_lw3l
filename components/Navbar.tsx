import { type ReactNode } from "react";

export default function Cleanbar() {
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
          {/* LEFT GROUP: Title + About */}
          {/* Added 'items-center' and 'gap-6' to space them out */}
          <div className="flex items-center gap-6">
            <h1 className="text-2xl hover:text-3xl font-bold leading-tight">
              <a href="/">TariqPedia</a>
            </h1>
            <a href="/about" className="hover:underline">
              About
            </a>
          </div>

          {/* RIGHT SIDE: Button */}
          <a
            href="/New_entry"
            className="hover:bg-amber-200/20 button border-2 rounded-xl text-center px-4 py-2 mt-4 sm:mt-0"
          >
            New/edit entry
          </a>
        </div>
      </nav>
    </>
  );
}

type LinkProps = { children: ReactNode; href: string };

function Link(props: LinkProps) {
  return (
    <a
      href={props.href}
      className="
            block                           /* augmente la hitbox */
            px-1 py-1 sm:px-2 sm:py-2 md:px-3 md:py-3                       /* padding confortable */
            rounded-3xl                      /* arrondi visible */
            text-[12px]  min-[400px]:text-[16px]
            hover:bg-white/5 hover:text-[18px] hover:[&>img]:h-7     /* hover propre */
            transition-all duration-200     /* smooth */
          "
    >
      {props.children}
    </a>
  );
}
