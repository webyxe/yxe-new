const Estrutura = () => {
    return (
        <section id="estrutura" className="bg-blue-600 py-20">
            <div className="container mx-auto px-4">
                <div className="xl:grid grid-cols-2 md:gap-5">
                    <div>
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl md:py-6 text-white font-bold text-center md:text-left">Estrutura</h2>
                        <ul className="text-white font-light pl-4 md:pl-8 list-disc text-base lg:text-2xl xl:text-3xl">
                            <li className="my-4 md:my-8">Estrutura completa de agência para produzir materiais exclusivos</li>
                            <li className="my-4 md:my-8">Ampla experiência com Varejo e Política</li>
                            <li className="my-4 md:my-8">Expertise em marketing digital e publicidade tradicional</li>
                            <li className="my-4 md:my-8">Produtora integrada: Não só criamos campanhas, como desenvolvemos, produzimos e analisamos resultados.</li>
                        </ul>
                    </div>
                    <div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="aspect-square rounded-xl sm:rounded-2xl bg-foto-1 bg-cover bg-center"></div>
                            <div className="aspect-square rounded-xl sm:rounded-2xl bg-foto-2 bg-cover bg-center"></div>
                            <div className="aspect-square rounded-xl sm:rounded-2xl bg-foto-3 bg-cover bg-center"></div>
                            <div className="aspect-square rounded-xl sm:rounded-2xl bg-foto-4 bg-cover bg-center"></div>
                            <div className="aspect-square rounded-xl sm:rounded-2xl bg-foto-5 bg-cover bg-center"></div>
                            <div className="aspect-square rounded-xl sm:rounded-2xl bg-foto-6 bg-cover bg-center"></div>
                            <div className="aspect-square rounded-xl sm:rounded-2xl bg-foto-7 bg-cover bg-center"></div>
                            <div className="aspect-square rounded-xl sm:rounded-2xl bg-foto-8 bg-cover bg-center"></div>
                            <div className="aspect-square rounded-xl sm:rounded-2xl bg-foto-9 bg-cover bg-center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Estrutura;