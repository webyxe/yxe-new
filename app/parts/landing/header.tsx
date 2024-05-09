"use client"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderMobile from "./headerMobile";

const Header = () => {
    const urlPath = usePathname();
    const isHome = (urlPath == '/') ? ' absolute ' : ''; 

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
            <header className={`h-20 z-20 top-0 w-full absolute ` + isHome}>
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <div className="logo">
                            <Link href="/"><Image src="/img/logo-white.png" width={100} height={64} className="w-16 lg:w-18" alt="" /></Link>
                        </div>
                        <nav className="items-center flex">
                            <ul className="mx-2 hidden md:flex text-xl">
                                <li><Link href="#topo" className={"px-3 text-white hover:text-orange-500 transition " + ((urlPath == "/") ? "!text-orange-500" : null) }>Início</Link></li>
                                <li><Link href="#sobre" className={"px-3 text-white hover:text-orange-500 transition " + ((urlPath == "/sobre") ? "!text-orange-500" : null) }>Sobre</Link></li>
                                <li><Link href="#legado" className={"px-3 text-white hover:text-orange-500 transition " + ((urlPath == "/servicos") ? "!text-orange-500" : null) }>Legado</Link></li>
                                <li><Link href="#vantagens" className={"px-3 text-white hover:text-orange-500 transition " + ((urlPath == "/blog") ? "!text-orange-500" : null) }>Vantagens</Link></li>
                                <li><Link href="#servicos" className={"px-3 text-white hover:text-orange-500 transition " + ((urlPath == "/contato") ? "!text-orange-500" : null) }>Serviços</Link></li>
                                <li><Link href="#contato" className={"px-3 text-white hover:text-orange-500 transition " + ((urlPath == "/contato") ? "!text-orange-500" : null) }>Contato</Link></li>
                            </ul>
                            <Link href="#" onClick={menuBurger}>
                                <div className={"hamburger hamburger-white hamburger--squeeze px-4 " + menuActive}>
                                    <div className="hamburger-box">
                                        <div className="hamburger-inner"></div>
                                    </div>
                                </div>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            <HeaderMobile menuNavigation={menuNavigation} menuBurger={menuBurger} urlPath={urlPath} />
        </div>
    );
}
export default Header;