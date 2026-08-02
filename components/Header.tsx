import Link from "next/link";

export default function Header() {
  return (
    <nav className="px-6 md:px-10 pt-6 pb-4 flex justify-between items-start">
      <Link href="/">
        <h1 className="text-[36px] md:text-[48px] font-normal text-[#B3050A] leading-none tracking-tight">
          Nicholas<br />Osorio-Okraku
        </h1>
      </Link>
      <button className="mt-2 p-1" aria-label="Open menu">
        <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0" width="28" height="2" fill="black" />
          <rect y="8" width="28" height="2" fill="black" />
          <rect y="16" width="28" height="2" fill="black" />
        </svg>
      </button>
    </nav>
  );
}
