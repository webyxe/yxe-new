"use client"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
    const urlPath = usePathname();
    const isHome = (urlPath == '/') ? ' absolute ' : null; 

    const [menuActive, setMenuActive] = useState('');
    const [menuNavigation, setMenuNavigation] = useState('-right-full');
    const menuBurger = () => {
        var currentActive = (menuActive == '') ? 'is-active' : '';
        var currentNavigation = (menuActive == '') ? 'right-0' : '-right-full';
        setMenuActive(currentActive);
        setMenuNavigation(currentNavigation);
    }
    return (
        <div>
            <header className={`h-20 z-20 top-0 w-full` + isHome}>
                <div className="mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="logo">
                            <Link href="/"><Image src="/img/logo.png" width={100} height={64} className="w-16 lg:w-18" alt="" /></Link>
                        </div>
                        <nav className="items-center flex">
                            <ul className="mx-2 hidden md:flex text-xl">
                                <li><Link href="/" className={"px-3 text-blue-500 hover:text-orange-500 transition " + ((urlPath == "/") ? "!text-orange-500" : null) }>Início</Link></li>
                                <li><Link href="/sobre" className={"px-3 text-blue-500 hover:text-orange-500 transition " + ((urlPath == "/sobre") ? "!text-orange-500" : null) }>Quem Somos</Link></li>
                                <li><Link href="/servicos" className={"px-3 text-blue-500 hover:text-orange-500 transition " + ((urlPath == "/servicos") ? "!text-orange-500" : null) }>Serviços</Link></li>
                                <li><Link href="/blog" className={"px-3 text-blue-500 hover:text-orange-500 transition " + ((urlPath == "/blog") ? "!text-orange-500" : null) }>Blog</Link></li>
                                <li><Link href="/contato" className={"px-3 text-blue-500 hover:text-orange-500 transition " + ((urlPath == "/contato") ? "!text-orange-500" : null) }>Contato</Link></li>
                            </ul>
                            <Link href="#" onClick={menuBurger}>
                                <div className={"hamburger hamburger--squeeze px-4 " + menuActive}>
                                    <div className="hamburger-box">
                                        <div className="hamburger-inner"></div>
                                    </div>
                                </div>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            <nav className={"fixed top-0 h-screen w-72 bg-blue-500 z-50 text-base transition-all duration-300 ease-in-out font-open " + menuNavigation} id="header-bar-mobile">
                <div className="hidden -right-full"></div>
                <Link href="#" className="button-close absolute top-0 right-0 p-4 text-2xl rounded-md text-white hover:text-orange-500 transition-colors" onClick={menuBurger}>
                    <FontAwesomeIcon icon={faXmark} className="h-8 w-8" />
                </Link>
                <div className="block">
                    <ul className="text-lg p-4">
                        <li className="py-2"><Link href="/" className="p-3 text-gray-100" onClick={menuBurger}>Home</Link></li>
                        <li className="py-2"><Link href="/sobre" className="p-3 text-gray-100" onClick={menuBurger}>Quem Somos</Link></li>
                        <li className="py-2"><Link href="/servicos" className="p-3 text-gray-100" onClick={menuBurger}>Serviços</Link></li>
                        <li className="py-2"><Link href="/blog" className="p-3 text-gray-100" onClick={menuBurger}>Blog</Link></li>
                        <li className="py-2"><Link href="/contato" className="p-3 text-gray-100" onClick={menuBurger}>Contato</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Header;