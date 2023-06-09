import Image from "next/image"
import NavBar from "./NavBar"
import { useRef, useState, useEffect } from "react"

const Header = () => {
    const [visible, setVisible] = useState(false)
    const menuRef = useRef()
    const openMenu = () => {
        setVisible(!visible)
    }
    useEffect(() => {
        console.log("Effect ran")
        const handleClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && event.target.tagName !== 'HTML') {
                setVisible(false)
            }
        }
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }
    }, [menuRef])
    return (
        <header className="bg-blackish py-5 w-full h-full">
            <nav>
                <div className='md:max-w-5xl md:mx-auto xl:max-w-screen-xl'>
                    <div className='flex justify-between px-3'>
                        <Image
                            src="/svg-export/logo.svg"
                            className='h-auto'
                            width={140}
                            height={150}
                            alt="logo"
                        />
                        <div className='relative' ref={menuRef}>
                            <button
                                className='border px-4 py-2 rounded-md cursor-pointer
                focus:outline-none focus:ring-1 focus:ring-offset-blue-700
                lg:hidden'
                                onClick={openMenu}
                            >
                                <div className='sm:w-16 sm:flex sm:justify-around
                sm:align-middle'>
                                    <p
                                        className='hidden font-bold tracking-wide
                text-white sm:inline text-xs'
                                    >
                                        MENU
                                    </p>
                                    <Image
                                        src="/svg-export/bars.svg"
                                        className='h-auto'
                                        width={15} height={13} alt="logo"
                                    />
                                </div>
                            </button>
                            <div className='hidden lg:inline'>
                                <NavBar />
                            </div>
                            <div className='lg:hidden'>
                                {visible && <NavBar />}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
