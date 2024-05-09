import Image from "next/image";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";

const About = () => {
    return (
        <>
            <section className="py-10 md:py-16 z-10 relative">
                <div className="z-20 relative container mx-auto px-4">
                    <div className="block lg:flex items-center">
                        <div className="lg:w-3/6 flex justify-content items-center p-4 z-10">
                            <Image src="/img/landing/politico-1.png" width={720} height={405} alt="Estúdio Grape" className="w-full mx-auto scale-150" />
                        </div>
                        <div className="lg:w-3/6 p-4 z-20">
                            <div className="text-base text-right md:text-2xl text-zinc-700">
                                <p className="py-2 font-light">Se você é um <span className="font-medium">pré-candidato</span> e está buscando <span className="font-medium">fortalecer sua presença digital</span> para alcançar o tão sonhado mandato, <span className="font-medium">você está no lugar certo</span>. </p>
                                <p className="py-2 font-light">Mas não se esqueça, a <span className="font-medium">corrida eleitoral já começou</span> e quanto antes você dar entrada no seu <span className="font-medium">marketing político digital</span>, mais chances de <span className="font-medium">obter o sucesso</span> você terá.</p>
                                <Link href={ContentLinks.whatsapp} className="conversion-contact" target="_blank"><button className="transition text-orange-500 border-r-4 border-orange-500 font-medium  my-4 py-1 px-6 text-base md:text-lg uppercase">FALAR COM UM CONSULTOR</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default About;