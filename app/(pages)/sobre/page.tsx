import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Image from "next/image";
import Link from "next/link";

const PageSobre = () => {
    return (
        <>
            <HeaderTitle titlePage="Quem Somos" />
            <section className="py-10 md:py-16 z-10 relative ">
                <div className="z-20 relative container mx-auto px-4">
                    <div className="block lg:flex items-center">
                        <div className="lg:w-3/6 flex justify-content items-center p-4">
                            <Image src="/img/foto-1.png" width={720} height={405} alt="Agência YXE" className="w-2/3 mx-auto rounded-full object-cover aspect-square" />
                        </div>
                        <div className="lg:w-3/6 p-4">
                            <h2 className="text-xl md:text-2xl text-blue-600 py-4">AGÊNCIA YXE</h2>
                            <div className="text-base text-justify md:text-left md:text-lg">
                                <p className="py-2 font-light">Com uma trajetória de mais de duas décadas no mercado publicitário, a YXE se estabeleceu como uma agência multidisciplinar comprometida em atender integralmente as demandas dos nossos clientes. </p>
                                <p className="py-2 font-light">Nosso diferencial reside na oferta de soluções completas e integradas para todas as etapas da publicidade, proporcionando uma abordagem holística que abrange desde a concepção até a execução das estratégias de comunicação. </p>
                                <div className="py-2 font-light">Como uma agência 360, estamos continuamente evoluindo e aprimorando nossos métodos, buscando incessantemente os melhores resultados para cada projeto que assumimos. Nosso compromisso com a excelência e a inovação nos impulsiona a superar expectativas e a alcançar o sucesso de nossos clientes em um mercado dinâmico e competitivo.</div>
                            </div>
                            <div className="py-2 md:text-lg flex text-gray-900 gap-5">
                                <div>
                                    <Link href="" target="_blank" className="text-pink-400">
                                        <i className="fa-brands fa-instagram text-xl md:text-2xl lg:text-3xl"></i>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" target="_blank" className="text-pink-400">
                                        <i className="fa-brands fa-square-facebook text-xl md:text-2xl lg:text-3xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 md:py-16 z-10 relative bg-gray-200 text-gray-900">
                <div className="z-20 relative container mx-auto px-4">
                    <h2 className="text-center text-xl md:text-2xl py-4">Somos uma agência dedicada a impulsionar o sucesso de nossos clientes.</h2>
                    <h2 className="text-center text-orange-500 text-base md:text-lg py-4">Nossa missão é inspirar, conectar e impactar.</h2>
                    <div className="block lg:flex">
                        <div className="text-center p-4">
                            <div className="text-base text-justify md:text-center md:text-lg">
                                <p className="py-2 font-light">
                                    Somos uma agência de publicidade, comunicação e marketing especializada em contar histórias e criar conexões autênticas entre marcas e seu público-alvo. 
                                    Nosso objetivo é impulsionar o sucesso de nossos clientes através de soluções inovadoras e resultados tangíveis.
                                </p>
                            </div>
                            <div className="py-2 md:text-lg flex text-gray-900 gap-5">
                                <div>
                                    <Link href="" target="_blank" className="text-pink-400">
                                        <i className="fa-brands fa-instagram text-xl md:text-2xl lg:text-3xl"></i>
                                    </Link>
                                </div>
                                <div>
                                    <Link href="" target="_blank" className="text-pink-400">
                                        <i className="fa-brands fa-square-facebook text-xl md:text-2xl lg:text-3xl"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default PageSobre;