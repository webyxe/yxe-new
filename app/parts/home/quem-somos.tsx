import Image from "next/image";

const QuemSomos = () => {
    return (
        <section id="quem-somos" className="bg-orange-600 py-20 pt-10 md:pt-16 z-10 relative overflow-hidden">
            <Image src="/img/detalhe-listra.png" width={300} height={376} className="absolute z-10 opacity-20 w-42 md:w-48 lg:w-52 xl:w-64 2xl:w-72 -left-60 md:-left-32 lg:-left-32 xl:-left-52 2xl:-left-48 bottom-4 md:bottom-12 lg:bottom-8 xl:bottom-12 2xl:bottom-12" alt="" />
            <Image src="/img/detalhe-listra.png" width={300} height={376} className="absolute z-10 opacity-20 w-42 md:w-48 lg:w-52 xl:w-64 2xl:w-72 -right-60 md:-right-32 lg:-right-32 xl:-right-52 2xl:-right-48 top-4 md:top-12 lg:top-8 xl:top-12 2xl:top-12" alt="" />
            <Image src="/img/detalhe-x-azul.png" width={186} height={186} className="absolute z-10 opacity-80 w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 -left-6 md:-left-6 lg:-left-10 xl:-left-4 2xl:-left-6 bottom-5 md:bottom-4 lg:bottom-4 xl:bottom-8 2xl:bottom-12" alt="" />
            <Image src="/img/detalhe-x.png" width={140} height={140} className="absolute z-10 opacity-80 w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 right-6 md:right-10 lg:right-10 xl:right-10 2xl:right-10 top-12 md:top-12 lg:top-12 xl:top-12 2xl:top-12" alt="" />
            <div className="relative container z-20 mx-auto px-4">
                <div className="block lg:flex items-center flex-row-reverse">
                    <div className="lg:w-3/6 flex justify-content items-center">
                        <Image src="/img/foto-1.png" width={500} height={500} alt="" className="w-1/3 lg:w-2/3 rounded-full object-cover aspect-square mx-auto" />
                    </div>
                    <div className="lg:w-3/6">
                        <div className="text-base text-justify lg:text-left md:text-xl text-white font-light">
                            <h2 className="text-xl text-center lg:text-left md:text-4xl py-4 text-white font-bold">Quem Somos</h2>
                            <p className="py-2">Há mais de duas décadas no mercado publicitário, a YXE é uma agência
                                multidisciplinar que atende as necessidades do seu negócio através de uma solução completa e
                                integrada para todas as etapas da publicidade.</p>
                            <p className="py-2">Uma agência 360 que está em constante desenvolvimento para entregar os melhores
                                resultados para os nossos clientes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default QuemSomos;