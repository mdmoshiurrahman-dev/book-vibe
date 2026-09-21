"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const pathName = usePathname();
  const links = (
    <>
      <ul className="flex gap-4 items-center">
        <li>
          <Link
            className={
              pathName === "/"
                ? "text-[#23BE0A] font-semibold px-2 py-1.5 border-[1.5px] rounded-md border-[#23BE0A]"
                : ""
            }
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === "/all-book-list"
                ? "text-[#23BE0A] font-semibold px-2 py-1.5 border-[1.5px] rounded-md border-[#23BE0A]"
                : ""
            }
            href="/all-book-list"
          >
            All Books
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === "/listed-book"
                ? "text-[#23BE0A] font-semibold px-2 py-1.5 border-[1.5px] rounded-md border-[#23BE0A]"
                : ""
            }
            href="/listed-book"
          >
            Listed Books
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === "#"
                ? "text-[#23BE0A] font-semibold px-2 py-1.5 border-[1.5px] rounded-md border-[#23BE0A]"
                : ""
            }
            href="#"
          >
            Pages to Read
          </Link>
        </li>
      </ul>
    </>
  );
  return (
    <nav>
      <div className="container mt-1 mx-auto p-2 flex justify-between items-center">
        <div>
          <p className="font-bold text-xl">Book Vibe</p>
        </div>
        <div>{links}</div>
        <div className="flex items-center gap-3">
          <button className="bg-[#23BE0A] px-3.75 py-2 font-semibold text-white text-[14px] rounded-md">
            Sign In
          </button>
          <button className="bg-[#59C6D2] px-3.75 py-2 font-semibold text-white text-[14px] rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
