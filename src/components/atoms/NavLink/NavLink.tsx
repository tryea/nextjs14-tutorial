"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps{
    path: string;
    title: string;
}

function NavLink({path, title}:NavLinkProps){
    const pathname = usePathname()
    const active = path === '/' ? pathname === path : pathname.includes(path)
    return (
        <Link href={path} className={`px-3 py-2 rounded-full ${active ? 'bg-white text-default-bg': ''}`}>{title}</Link>
    )
}

export default NavLink;