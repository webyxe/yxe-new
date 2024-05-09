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
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                        <div className="text-sm md:text-xl text-black rounded-xl">
                            <div className="text-md md:text-lg py-6 md:p-6 my-3 md:mt-0">
                                <div className="text-lg md:text-xl pb-8">
                                    <h3 className="font-normal text-blue-600 uppercase text-4xl">Seja o Líder que <br /> Seu Povo Merece.</h3>
                                </div>
                                <div className="text-3xl font-medium pb-8">
                                    Não deixe sua mensagem se perder no ruído político. Com o Group YXE, você terá a vantagem competitiva necessária para se destacar. Entre em contato conosco hoje mesmo e descubra como podemos transformar sua visão política em realidade.
                                </div>
                                <div>
                                    <Link className="block" href={ContentLinks.whatsapp}><button type="button" className="py-2 px-6 text-base rounded-md bg-orange-500 hover:bg-orange-600 transition ease-in-out duration-300 delay-300 text-white uppercase flex justify-center items-center gap-x-2"><FontAwesomeIcon icon={faArrowRight} />fale com um consultor</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm md:text-xl rounded-xl">
                            <div className="text-md md:text-lg p-4 md:p-6 my-3 md:mt-0">
                                <div className="">
                                    <h3 className=" text-xl md:text-2xl pb-6 text-orange-500">Juntos, podemos construir um futuro melhor.</h3>
                                    <FormContato />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Contato; 