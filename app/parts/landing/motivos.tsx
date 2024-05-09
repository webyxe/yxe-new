import Image from "next/image";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHandshake, faLightbulb, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faHeadset, faPhone, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

const Motivos = () => {
    return (
        <>
            <section className="pt-10 md:pt-16 z-10 relative">
                <div className="z-20 relative container mx-auto px-4">
                    <h2 className="text-blue-600 py-4 text-center text-3xl uppercase">Por que Escolher Group YXE?</h2>
                    <div className="block lg:flex items-center">
                        <div className="lg:w-3/6 flex justify-content items-center px-4 pt-4 z-10">
                            <Image src="/img/landing/politico-2.png" width={720} height={405} alt="Estúdio Grape" className="w-full mx-auto" />
                        </div>
                        <div className="lg:w-3/6 p-4 z-20 flex flex-col gap-4">
                            
                            <div className="md:flex h-full bg-gray-200 justify-content rounded-xl items-center py-4 px-2 group">
                                <div className="w-24 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faSquareCheck} className="text-orange-500 text-4xl" />
                                </div>
                                <div className="w-full">
                                    <div className="mb-2">
                                        <h4 className="text-xl text-orange-500 pb-2">Experiência Comprovada</h4>
                                        <p className="text-sm text-black">Nossa agência possui um histórico sólido de sucesso no mundo do marketing político. De campanhas locais a nacionais, entregamos resultados excepcionais para nossos clientes.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex h-full bg-gray-200 justify-content rounded-xl items-center py-4 px-2 group">
                                <div className="w-24 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faLightbulb} className="text-orange-500 text-4xl" />
                                </div>
                                <div className="w-full">
                                    <div className="mb-2">
                                        <h4 className="text-xl text-orange-500 pb-2">Estratégias Inovadoras</h4>
                                        <p className="text-sm text-black">Não nos contentamos com o comum. Desenvolvemos estratégias sob medida, utilizando as últimas tendências e tecnologias para garantir que sua mensagem ressoe com seu eleitorado-alvo.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex h-full bg-gray-200 justify-content rounded-xl items-center py-4 px-2 group">
                                <div className="w-24 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faHandshake} className="text-orange-500 text-4xl" />
                                </div>
                                <div className="w-full">
                                    <div className="mb-2">
                                        <h4 className="text-xl text-orange-500 pb-2">Compromisso com a Ética</h4>
                                        <p className="text-sm text-black">Acreditamos em fazer política da maneira certa. Nossa abordagem ética e transparente nos diferencia, garantindo que sua campanha permaneça na linha correta.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex h-full bg-gray-200 justify-content rounded-xl items-center py-4 px-2 group">
                                <div className="w-24 flex justify-center items-center">
                                    <FontAwesomeIcon icon={faHeadset} className="text-orange-500 text-4xl" />
                                </div>
                                <div className="w-full">
                                    <div className="mb-2">
                                        <h4 className="text-xl text-orange-500 pb-2">Suporte Personalizado</h4>
                                        <p className="text-sm text-black">No YXE Group, sua campanha não é apenas mais um projeto. Oferecemos um suporte personalizado, trabalhando lado a lado com você para alcançar seus objetivos e superar suas expectativas.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Motivos;