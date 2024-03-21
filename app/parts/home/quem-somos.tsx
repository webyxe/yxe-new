import Image from "next/image";

const QuemSomos = () => {
    return (
        <section id="quem-somos" className="bg-orange-600 py-20 pt-10 md:pt-16 z-10 relative overflow-hidden">
            <Image src="/img/detalhe-listra.png" width={300} height={376} className="absolute w-72 -left-48 bottom-12" alt="" />
            <Image src="/img/detalhe-listra.png" width={300} height={376} className="absolute w-72 -right-48 top-12" alt="" />
            <Image src="/img/detalhe-x-azul.png" width={186} height={186} className="absolute w-32 -left-6 bottom-12" alt="" />
            <Image src="/img/detalhe-x.png" width={140} height={140} className="absolute w-32 right-10 top-12" alt="" />
            <div className="container mx-auto px-4">
                <div className="block lg:flex items-center">
                    <div className="lg:w-3/6">
                        <div className="text-base text-justify md:text-left md:text-xl text-white font-light">
                            <h2 className="text-xl md:text-4xl py-4 text-white font-bold">Quem Somos</h2>
                            <p className="py-2">Há mais de duas décadas no mercado publicitário, a YXE é uma agência
                                multidisciplinar que atende as necessidades do seu negócio através de uma solução completa e
                                integrada para todas as etapas da publicidade.</p>
                            <p className="py-2">Uma agência 360 que está em constante desenvolvimento para entregar os melhores
                                resultados para os nossos clientes.</p>
                        </div>
                    </div>
                    <div className="lg:w-3/6 flex justify-content items-center">
                        <Image src="/img/foto-1.png" width={500} height={500} alt="" className="w-2/3 rounded-full object-cover aspect-square mx-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default QuemSomos;