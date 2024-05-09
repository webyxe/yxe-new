import { faCheckSquare, faCreditCard, faIndustry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";
import FormContato from "./formContato";

export default function Banner() {
    return (
        <>
            <div id="banner" className="bg-cover bg-landing bg-center min-h-[20rem] md:h-[32rem] lg:h-[35rem] 2xl:h-[42rem]">
                <div className="container mx-auto px-10 md:px-4 h-full">
                    <div className="md:flex items-center justify-center gap-x-10 h-full pt-20">
                        <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
                            <h1 className="!leading-tight xl:!leading-snug font-light text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white py-4 2xl:py-6 text-center md:text-left">Descubra como a YXE pode <span className="font-medium">transformar sua candidatura</span> em uma <span className="font-medium">história de sucesso político</span>.</h1>
                            <Link href={ContentLinks.whatsapp}><button type="button" className="block bg-orange-500 hover:bg-zinc-100 transition text-white font-medium rounded-md my-2 py-3 px-8 text-base uppercase mx-auto md:mx-0">SAIBA MAIS</button></Link>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center bg-feature bg-contain bg-bottom bg-no-repeat h-full">
                            <div className="bg-white w-full px-6 py-8 rounded-xl">
                                <h3 className=" text-xl md:text-2xl pb-6 text-orange-500">Juntos, podemos construir um futuro melhor.</h3>
                                <FormContato />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}