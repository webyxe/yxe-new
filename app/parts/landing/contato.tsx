import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";
import FormContato from "./formContato";

const Contato = () => {
    return (
        <>
            <section id="contato" className="min-h-[35rem] py-4 md:py-10 bg-contato bg-cover bg-center bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                        <div className="text-sm md:text-xl text-black rounded-xl text-center md:text-left">
                            <div className="text-md md:text-lg py-6 md:pr-10 my-3 md:mt-0">
                                <div className="text-lg md:text-xl pb-8">
                                    <h3 className="font-normal text-blue-600 uppercase text-xl md:text-2xl lg:text-3xl">Seja o Líder que <br className="hidden md:block" /> Seu Povo Merece.</h3>
                                </div>
                                <div className="text-base md:text-lg lg:text-xl font-light pb-8">Não deixe sua mensagem se perder no ruído político. Com o Group YXE, você terá a <span className="font-medium">vantagem competitiva</span> necessária para se <span className="font-medium">destacar</span>. Entre em contato conosco hoje mesmo e descubra como podemos <span className="font-medium">transformar sua visão política em realidade</span>.</div>
                                <div>
                                    <Link className="block conversion-contact" href={ContentLinks.whatsapp} target="_blank"><button type="button" className="mx-auto md:mx-0 py-2 px-6 text-base rounded-md bg-orange-500 hover:bg-orange-600 transition ease-in-out duration-300 delay-300 text-white uppercase flex justify-center items-center gap-x-2"><FontAwesomeIcon icon={faArrowRight} />fale com um consultor</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm md:text-xl rounded-xl">
                            <div className="text-md md:text-lg p-4 md:p-6 my-3 md:mt-0">
                                <h3 className="text-lg lg:text-xl xl:text-2xl pb-6 text-orange-500">Juntos, podemos construir um futuro melhor.</h3>
                                <FormContato fields="white" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Contato; 