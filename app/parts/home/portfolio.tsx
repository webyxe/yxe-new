import Image from "next/image";

const Portfolio = () => {
    return (
        <section id="portfolio" className="bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-4xl py-6 text-center text-white font-bold">Portfólio</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <div className="aspect-square rounded-xl sm:rounded-2xl bg-gray-200 bg-cover bg-center flex justify-center items-center">
                            <Image src="/img/servicos/livre-leve-solto.png" width={300} height={300} alt="" className="mx-auto w-2/3" />
                        </div>
                        <h3 className="text-white py-4 text-center font-medium text-2xl">Livre Leve Solto</h3>
                        <Image src="/img/portfolio/livre-leve-solto.png" width={300} height={300} alt="" className="mx-auto my-2 w-1/3" />
                    </div>
                    <div>
                        <div className="aspect-square rounded-xl sm:rounded-2xl bg-gray-200 bg-cover bg-center flex justify-center items-center">
                            <Image src="/img/servicos/feira-nova.png" width={300} height={300} alt="" className="mx-auto w-1/3" />
                        </div>
                        <h3 className="text-white py-4 text-center font-medium text-2xl">Feira Nova</h3>
                        <Image src="/img/portfolio/feira-nova.png" width={300} height={300} alt="" className="mx-auto my-2 w-1/3" />
                    </div>
                    <div>
                        <div className="aspect-square rounded-xl sm:rounded-2xl bg-gray-200 bg-cover bg-center flex justify-center items-center">
                            <Image src="/img/servicos/redeconomia.png" width={300} height={300} alt="" className="mx-auto w-2/3" />
                        </div>
                        <h3 className="text-white py-4 text-center font-medium text-2xl">Redeconomia</h3>
                        <Image src="/img/portfolio/redeconomia.png" width={300} height={300} alt="" className="mx-auto my-2 w-1/3" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Portfolio;