import Link from "next/link"

interface NavLinksProps{

}

function NavLinks({}:NavLinksProps){
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

    return (
        <>
        {
            links.map((link) => {
                return (
                    <Link href={link.path} key={link.title}>{link.title}</Link>
                )
            })
        }
        </>
    )
}

export default NavLinks;