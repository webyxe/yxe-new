import { faFacebookSquare, faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <div id="banner" className="relative z-10 bg-principal bg-cover bg-center min-h-[90vh] py-8 flex justify-center items-center">
            <div className="flex flex-col">
                <div>
                    <Image src="/img/logo.png" width={288} height={184} className="w-72 mx-auto" alt="" />
                </div>
                <div className="my-10 text-3xl flex justify-center items-center">
                    <div className="font-bold mx-2 p-2 border-orange-500 border-2 rounded-full">Tudo</div> em um só lugar
                </div>
            </div>
            <div className="absolute z-50 left-0 bottom-0 font-normal p-2 md:text-lg">
                <div className="hover:scale-105 transition duration-500">
                    <Link className="block text-blue-500 hover:text-orange-500 p-3 flex justify-center items-center rounded-lg my-2" target="_blank" href="https://pt-br.facebook.com/fabiofreitasbr">
                        <FontAwesomeIcon icon={faFacebookSquare} className="h-8 w-8" />
                    </Link>
                </div>
                <div className="hover:scale-105 transition duration-500">
                    <Link className="block text-blue-500 hover:text-orange-500 p-3 flex justify-center items-center rounded-lg my-2" target="_blank" href="https://www.instagram.com/fabiofreitasbr/">
                        <FontAwesomeIcon icon={faInstagram} className="h-8 w-8" />
                    </Link>
                </div>
                <div className="hover:scale-105 transition duration-500">
                    <Link className="block text-blue-500 hover:text-orange-500 p-3 flex justify-center items-center rounded-lg my-2" target="_blank" href="https://www.youtube.com/@fabiofreitasbr">
                        <FontAwesomeIcon icon={faYoutube} className="h-8 w-8" />
                    </Link>
                </div>
                <div className="hover:scale-105 transition duration-500">
                    <Link className="block text-blue-500 hover:text-orange-500 p-3 flex justify-center items-center rounded-lg my-2" target="_blank" href="https://www.youtube.com/@fabiofreitasbr">
                        <FontAwesomeIcon icon={faEnvelope} className="h-8 w-8" />
                    </Link>
                </div>
            </div>

        </div>
    );
}
export default Banner;