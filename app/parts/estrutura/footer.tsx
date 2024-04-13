import ContentLinks from "@/app/dados/contentLinks";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <footer id="footer" className="bg-blue-600 py-2 md:py-8 text-white font-brandon">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-16">
                        <div className="md:block flex justify-center md:col-span-3 lg:col-span-1">
                            <Link href="/">
                                <Image alt="" data-src="/img/logo-white.png" width={500} height={500} className="max-w-36 w-1/2 mx-auto my-4 ls-is-cached lazyloaded" src="/img/logo-white.png" />
                            </Link>
                        </div>
                        <div className="my-4 md:my-0 flex flex-col items-center text-center md:text-left md:block">
                            <h3 className="py-2 mb-2 text-orange-500 text-2xl">MENU</h3>
                            <div id="menu-principal-footer" className="menu-principal-container text-sm">
                                <ul id="footer-nav" className="font-reading">
                                    <li id="nav-menu-item-21" className="py-2">
                                        <Link href="/" className="main-menu-link text-white hover:text-orange-500 transition">
                                            Início
                                        </Link>
                                    </li>
                                    <li id="nav-menu-item-22" className="py-2">
                                        <Link href="/sobre" className="main-menu-link text-white hover:text-orange-500 transition">
                                            Quem Somos
                                        </Link>
                                    </li>
                                    <li id="nav-menu-item-24" className="py-2">
                                        <Link href="/servicos"
                                            className="main-menu-link text-white hover:text-orange-500 transition">
                                            Serviços
                                        </Link>
                                    </li>
                                    <li id="nav-menu-item-25" className="py-2">
                                        <Link href="/contato"
                                            className="main-menu-link text-white hover:text-orange-500 transition">
                                            Contato
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="my-4 md:my-0 flex flex-col items-center text-center md:text-left md:block">
                            <h3 className="py-2 mb-2 text-orange-500 text-2xl">CONTATO</h3>
                            <div id="menu-principal-footer" className="menu-principal-container uppercase text-sm">
                                <ul id="footer-nav" className="font-reading">
                                    <li id="nav-menu-item-21" className="py-2">
                                        <Link href={ContentLinks.email} target="_blank" className="main-menu-link text-white hover:text-orange-500 transition break-all flex">
                                            <FontAwesomeIcon className="w-4 h-4 mx-2" icon={faEnvelope} /> {ContentLinks.emailShow}
                                        </Link>
                                    </li>
                                    <li id="nav-menu-item-21" className="py-2">
                                        <Link href={ContentLinks.phone} target="_blank" className="main-menu-link text-white hover:text-orange-500 transition break-all flex">
                                            <FontAwesomeIcon className="w-4 h-4 mx-2" icon={faWhatsapp} />  {ContentLinks.phoneShow}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="my-4 md:my-0 flex flex-col items-center text-center md:text-left md:block">
                            <h3 className="py-2 mb-2 text-orange-500 text-2xl">REDES SOCIAIS</h3>
                            <div className="py-2 md:text-lg flex text-gray-900 gap-5">
                                <div>
                                    <Link href={ContentLinks.facebook} target="_blank" className="text-white">
                                        <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-orange-500 w-6 h-6" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href={ContentLinks.instagram} target="_blank" className="text-white">
                                        <FontAwesomeIcon icon={faInstagram} className=" text-white hover:text-orange-500 w-6 h-6" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="pos-footer bg-orange-500 text-white py-3">
                <div className="container mx-auto px-4">
                    <div className="text-center text-xs md:text-sm uppercase py-1 font-medium">
                        <strong>Agência YXE</strong> - Todos os direitos reservados
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;