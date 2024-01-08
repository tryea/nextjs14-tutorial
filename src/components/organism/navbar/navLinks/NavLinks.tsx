"use client"

import NavLink from "@/components/atoms/NavLink/NavLink";
import { useState } from "react";

interface NavLinksProps{

}

const links = [
    {
        title: "Homepage",
        path: '/'
    },
    {
        title: "About",
        path: '/about'
    },
    {
        title: "Contact",
        path: '/contact'
    },
    {
        title: "Blog",
        path: '/blog'
    },
]

function NavLinks({}:NavLinksProps){
    const [open, setOpen] = useState(false)

    const session = true
    const isAdmin = true

    return (
        <>
        {
            links.map((link) => {
                return (
                    <NavLink path={link.path} title={link.title} key={link.title} />
                )
            })
        }
         {session ? (
            <>
                {isAdmin && <NavLink path="/admin" title="Admin" />}
                <button type="button" className="px-3 py-2 rounded-xl bg-red-500">Log Out</button>
            </>
            ): (<NavLink path="/login" title="Log In" />)}
        </>
    )
}

export default NavLinks;