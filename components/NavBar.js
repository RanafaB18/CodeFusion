import Link from "next/link"

const NavBar = () => {
    return (
        <div
            className='absolute text-whitish bg-blacklike
                flex flex-col py-2 right-0 w-60 font-semibold
                text-md rounded-md lg:flex-row lg:relative lg:w-full
                lg:bg-blackish lg:align-middle'
        >
            <Link className='nav-link' href={"#features"}>Features</Link>
            <Link className='nav-link' href={"/"}>Pricing</Link>
            <Link className='nav-link' href={"/"}>FAQ</Link>
            <Link className='nav-link' href={"/"}>Contact</Link>
            <Link className='nav-link' href={"/"}>Login</Link>
            <Link href={"/"}
                className='nav-link bg-whitelike text-blacklike rounded-md
                   mt-1 mx-2 px-3 hover:bg-whitehover lg:mt-0
                  text-center'
            >
                Sign Up
            </Link>
        </div>
    )
}

export default NavBar
