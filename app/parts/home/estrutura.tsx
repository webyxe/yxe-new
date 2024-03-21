const Estrutura = () => {
    return (
        <section id="estrutura" className="bg-blue-600 py-20">
            <div className="container mx-auto px-4">
                <div className="flex gap-5">
                    <div className="w-1/2">
                        <h2 className="text-xl md:text-4xl py-6 text-white font-bold">Estrutura</h2>
                        <ul className="text-white font-light pl-8 list-disc">
                            <li className="my-8 text-3xl">Estrutura completa de agência para produzir materiais exclusivos</li>
                            <li className="my-8 text-3xl">Ampla experiência com Varejo e Política</li>
                            <li className="my-8 text-3xl">Expertise em marketing digital e publicidade tradicional</li>
                            <li className="my-8 text-3xl">Produtora integrada: Não só criamos campanhas, como desenvolvemos, produzimos e analisamos resultados.</li>
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
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