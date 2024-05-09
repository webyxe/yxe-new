"use client"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function HeaderMobile({ menuNavigation, menuBurger, urlPath }: any) {
    return (
        <nav className={"fixed top-0 h-screen w-72 bg-blue-500 z-50 text-base transition-all duration-300 ease-in-out font-open " + menuNavigation} id="header-bar-mobile">
            <div className="hidden -right-full"></div>
            <Link href="#" className="button-close absolute top-0 right-0 p-4 text-2xl rounded-md text-white hover:text-orange-500 transition-colors" onClick={menuBurger}>
                <FontAwesomeIcon icon={faXmark} className="h-8 w-8" />
            </Link>
            <div className="block">
                <ul className="text-lg p-4">
                    <li className="py-2"><Link href="#topo" className={"p-3 text-gray-100 " + ((urlPath == "/") ? "!text-orange-500" : null)}>Início</Link></li>
                    <li className="py-2"><Link href="#sobre" className={"p-3 text-gray-100 " + ((urlPath == "/sobre") ? "!text-orange-500" : null)}>Sobre</Link></li>
                    <li className="py-2"><Link href="#legado" className={"p-3 text-gray-100 " + ((urlPath == "/servicos") ? "!text-orange-500" : null)}>Legado</Link></li>
                    <li className="py-2"><Link href="#vantagens" className={"p-3 text-gray-100 " + ((urlPath == "/blog") ? "!text-orange-500" : null)}>Vantagens</Link></li>
                    <li className="py-2"><Link href="#servicos" className={"p-3 text-gray-100 " + ((urlPath == "/contato") ? "!text-orange-500" : null)}>Serviços</Link></li>
                    <li className="py-2"><Link href="#contato" className={"p-3 text-gray-100 " + ((urlPath == "/contato") ? "!text-orange-500" : null)}>Contato</Link></li>
                </ul>
            </div>
        </nav>
    )
}