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
                            <Link href="/"><Image src="/img/logo.png" width={100} height={64} className="h-10 lg:h-16" alt="" /></Link>
                        </div>
                        <nav className="items-center flex">
                            <ul className="mx-2 hidden md:flex text-xl">
                                <li><Link href="/" className="px-3 text-blue-500 hover:text-orange-500 transition">Início</Link></li>
                                <li><Link href="/sobre" className="px-3 text-blue-500 hover:text-orange-500 transition">Quem Somos</Link></li>
                                <li><Link href="/blog" className="px-3 text-blue-500 hover:text-orange-500 transition">Blog</Link></li>
                                <li><Link href="/servicos" className="px-3 text-blue-500 hover:text-orange-500 transition">Serviços</Link></li>
                                <li><Link href="/contato" className="px-3 text-blue-500 hover:text-orange-500 transition">Contato</Link></li>
                            </ul>
                            <a onClick={menuBurger}>
                                <div className={"hamburger hamburger--squeeze px-4 " + menuActive}>
                                    <div className="hamburger-box">
                                        <div className="hamburger-inner"></div>
                                    </div>
                                </div>
                            </a>
                        </nav>
                    </div>
                </div>
            </header>
            <nav className={"fixed top-0 h-screen w-72 bg-blue-500 z-50 text-base transition-all duration-300 ease-in-out font-open " + menuNavigation} id="header-bar-mobile">
                <div className="hidden -right-full"></div>
                <div className="button-close absolute top-0 right-0 px-4 py-2 my-2 mx-4 text-2xl rounded-md text-white hover:text-orange-500 transition-colors" onClick={menuBurger}>
                    <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
                </div>
                <div className="block">
                    <ul className="uppercase text-lg p-4">
                        <li className="py-2"><Link href="#header" className="p-3 text-gray-100">Home</Link></li>
                        <li className="py-2"><Link href="#sobre" className="p-3 text-gray-100">Sobre</Link></li>
                        <li className="py-2"><Link href="#servicos" className="p-3 text-gray-100">Serviços</Link></li>
                        <li className="py-2"><Link href="#contato" className="p-3 text-gray-100">Contato</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Header;