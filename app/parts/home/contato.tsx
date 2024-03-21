import { faFacebookSquare, faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const Contato = () => {
    return (
        <section id="contato" className="min-h-[35rem] py-4 md:py-10">
            <div className="container mx-auto px-6">
                <div className="container mx-auto mb-2 md:mb-6 px-4">
                    <div className="text-center">
                        <h2 className="text-orange-500  font-medium text-xl md:text-3xl my-2">Entre em contato</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <div className="text-sm md:text-xl bg-gray-200 rounded-xl text-black rounded-xl">
                        <div className="text-md md:text-lg p-2 md:p-6 my-3 md:mt-0">
                            <div className="">
                                <h3 className="text-orange-500 text-xl md:text-2xl pb-6">Nós ligamos pra você!</h3>
                                <form action="" method="post" id="form-contact">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                        <input type="text" name="name" id="name" className="bg-white w-full py-3 px-6 rounded-lg text-lg font-light bg-transparent border border-orange-500 text-orange-500 lg:col-span-2" placeholder="Nome" />
                                        <input type="text" name="email" id="email" className="bg-white w-full py-3 px-6 rounded-lg text-lg font-light bg-transparent border border-orange-500 text-orange-500" placeholder="E-mail" />
                                        <input type="text" name="phone" id="phone" className="bg-white w-full py-3 px-6 rounded-lg text-lg font-light bg-transparent border border-orange-500 text-orange-500" placeholder="Telefone" />
                                        <div>
                                            <button type="submit" className="py-1 px-2 md:px-6 rounded-md md:rounded-lg bg-blue-600 transition ease-in-out duration-300 delay-300 text-white uppercase flex justify-center items-center gap-x-2"><FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />Enviar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="flex justify-center items-center">
                                <hr className="border border-gray-100 w-full" />
                                <div className="p-4 text-orange-500 font-medium ">ou</div>
                                <hr className="border border-gray-100 w-full" />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">

                                <button type="button" className="bg-white hover:bg-gray-100 transition text-orange-500 font-medium rounded-full py-3 px-2 block text-sm flex justify-center items-center "><FontAwesomeIcon icon={faPhone} className="mx-2 h-4 w-4" /> Ligue agora mesmo!</button>
                                <button type="button" className="bg-orange-500 hover:bg-orange-600 transition text-white font-medium rounded-full py-3 px-2 block text-sm flex justify-center items-center "><FontAwesomeIcon icon={faWhatsapp} className="mx-2 h-4 w-4" /> Envie-nos uma mensagem!</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm md:text-xl text-orange-500 rounded-xl">
                        <div className="text-md md:text-lg px-6 my-3 md:mt-0">
                            <div className="text-lg md:text-xl">
                                <h3 className="font-normal ">Informações</h3>
                                <p className="text-gray-900 text-sm py-2">Entre em contato conosco através de um dos nossos canais de atendimento.</p>
                            </div>
                            <Link href="#" target="_blank">
                                <div
                                    className="flex justify-start items-center px-2 pt-4 pb-6 my-4 rounded-lg bg-gray-200 break-all text-gray-900">
                                    <div className="px-4 md:px-6 text-xl md:text-4xl">
                                        <FontAwesomeIcon icon={faPhone} className="h-10 w-10 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold text-orange-500 ">Telefone:</div>
                                        <div className="font-light">(21) 9999-9999</div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="#" target="_blank">
                                <div className="flex justify-start items-center px-2 pt-4 pb-6 my-4 rounded-lg bg-gray-200 break-all text-gray-900">
                                    <div className="px-4 md:px-6 text-xl md:text-4xl">
                                        <FontAwesomeIcon icon={faWhatsapp} className="h-10 w-10 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold text-orange-500 ">WhatsApp:</div>
                                        <div className="font-light">(21) 99999-9999</div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="#" target="_blank">
                                <div className="flex justify-start items-center px-2 pt-4 pb-6 my-4 rounded-lg bg-gray-200 break-all text-gray-900">
                                    <div className="px-4 md:px-6 text-xl md:text-4xl">
                                        <FontAwesomeIcon icon={faEnvelope} className="h-10 w-10 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="py-1 font-bold text-orange-500 ">E-mail:</div>
                                        <div className="font-light">contato@yxe.com.br</div>
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