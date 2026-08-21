"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname=usePathname();
    const isActive = (path) => {
        return pathname === path ? "text-blue-500 font-bold underline" : "text-white"  }
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex justify-center items-center gap-8">
              <li className="hover:bg-gray-600 cursor-pointer">
                  <Link  className={isActive("/")} href="/"> Home </Link>
               </li>

               
   <li className="hover:bg-gray-600 cursor-pointer">
                  <Link className={isActive("/about")}href="/about"> About </Link>
               </li>
   <li className="hover:bg-gray-600 cursor-pointer">
                  <Link className={isActive("/contact")} href="/contact"> Contact </Link>
               </li>
            </ul>
        </nav>
    )
}