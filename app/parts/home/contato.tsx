import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import FormContato from "@/app/parts/estrutura/formContato";
import ContentLinks from "@/app/dados/contentLinks";

const Contato = () => {
    return (
        <section id="contato" className="min-h-[35rem] py-4 md:py-10">
            <div className="container mx-auto px-6">
                <div className="container mx-auto mb-2 md:mb-6 px-4">
                    <div className="text-center">
                        <h2 className="text-orange-500  font-medium text-xl md:text-3xl my-2">Entre em contato</h2>
                    </div>
                </div>
                <div className="block md:flex items-start gap-x-4">
                    <div className="w-full md:w-1/2 text-sm md:text-xl bg-gray-200 rounded-xl text-black">
                        <div className="text-md md:text-lg p-6 md:p-6 my-3 md:mt-0">
                            <div className="">
                                <h3 className="text-orange-500 text-xl md:text-2xl pb-6">Nós ligamos pra você!</h3>
                                <FormContato />
                            </div>
                            <div className="flex justify-center items-center">
                                <hr className="border border-gray-100 w-full" />
                                <div className="p-4 text-orange-500 font-medium ">ou</div>
                                <hr className="border border-gray-100 w-full" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">

                                <Link href={ContentLinks.phone}><button type="button" className="w-full bg-white hover:bg-gray-100 transition text-orange-500 font-medium rounded-full py-3 px-2 text-sm flex justify-center items-center "><FontAwesomeIcon icon={faPhone} className="mx-2 h-4 w-4" /> Ligue agora mesmo!</button></Link>
                                <Link href={ContentLinks.whatsapp}><button type="button" className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-medium rounded-full py-3 px-2 text-sm flex justify-center items-center "><FontAwesomeIcon icon={faWhatsapp} className="mx-2 h-4 w-4" /> Envie-nos uma mensagem!</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 text-sm md:text-xl text-orange-500 rounded-xl">
                        <div className="text-md md:text-base md:px-6 my-3 md:mt-0">
                            <div className="text-lg md:text-xl">
                                <h3 className="font-normal ">Informações</h3>
                                <p className="text-gray-900 text-base py-2">Entre em contato conosco através de um dos nossos canais de atendimento.</p>
                            </div>
                            <Link href={ContentLinks.phone} target="_blank">
                                <div
                                    className="flex justify-start items-center px-2 pt-4 pb-6 my-4 rounded-lg bg-gray-200 break-all text-gray-900">
                                    <div className="px-4 md:px-6 text-xl md:text-4xl">
                                        <FontAwesomeIcon icon={faPhone} className="w-6 md:h-10 md:w-10 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold text-orange-500 ">Telefone:</div>
                                        <div className="font-light">{ContentLinks.phoneShow}</div>
                                    </div>
                                </div>
                            </Link>
                            {/* <Link href={ContentLinks.phone2} target="_blank">
                                <div className="flex justify-start items-center px-2 pt-4 pb-6 my-4 rounded-lg bg-gray-200 break-all text-gray-900">
                                    <div className="px-4 md:px-6 text-xl md:text-4xl">
                                        <FontAwesomeIcon icon={faPhone} className="w-6 md:h-10 md:w-10 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold text-orange-500 ">Telefone Secundário:</div>
                                        <div className="font-light">{ContentLinks.phoneShow2}</div>
                                    </div>
                                </div>
                            </Link> */}
                            <Link href={ContentLinks.email} target="_blank">
                                <div className="flex justify-start items-center px-2 pt-4 pb-6 my-4 rounded-lg bg-gray-200 break-all text-gray-900">
                                    <div className="px-4 md:px-6 text-xl md:text-4xl">
                                        <FontAwesomeIcon icon={faEnvelope} className="w-6 md:h-10 md:w-10 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold text-orange-500 ">E-mail:</div>
                                        <div className="font-light">{ContentLinks.emailShow}</div>
                                    </div>
                                </div>
                            </Link>
                            
                            <Link href={ContentLinks.maps} target="_blank">
                                <div className="flex justify-start items-center px-2 pt-4 pb-6 my-4 rounded-lg bg-gray-200 break-all text-gray-900">
                                    <div className="px-4 md:px-6 text-xl md:text-4xl">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 md:h-10 md:w-10 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold text-orange-500 ">Endereço:</div>
                                        <div className="font-light">{ContentLinks.address1}</div>
                                        <div className="font-light">{ContentLinks.address2}</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contato;