"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        w-full
        max-w-sm
        bg-white
        border-t
        flex
        justify-around
        py-4
      "
    >
      <Link
        href="/"
        className={`
          flex
          flex-col
          items-center
          text-sm
          ${pathname === "/" ? "text-green-700 font-bold" : "text-gray-500"}
        `}
      >
        <span>🏠</span>
        <span>Home</span>
      </Link>

      <Link
        href="/scan"
        className={`
          flex
          flex-col
          items-center
          text-sm
          ${pathname === "/scan" ? "text-green-700 font-bold" : "text-gray-500"}
        `}
      >
        <span>📷</span>
        <span>Scan</span>
      </Link>

      <Link
        href="/crops"
        className={`
          flex
          flex-col
          items-center
          text-sm
          ${
            pathname === "/crops" ? "text-green-700 font-bold" : "text-gray-500"
          }
        `}
      >
        <span>🌾</span>
        <span>Crops</span>
      </Link>

      <Link
        href="/profile"
        className={`
          flex
          flex-col
          items-center
          text-sm
          ${
            pathname === "/profile"
              ? "text-green-700 font-bold"
              : "text-gray-500"
          }
        `}
      >
        <span>👤</span>
        <span>Profile</span>
      </Link>

      <Link
        href="/history"
        className={`
    flex
    flex-col
    items-center
    text-sm
    ${pathname === "/history" ? "text-green-700 font-bold" : "text-gray-500"}
  `}
      >
        <span>📜</span>

        <span>History</span>
      </Link>
    </nav>
  );
}
