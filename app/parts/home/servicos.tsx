import ListServicos from "../estrutura/listServicos";

const Servicos = () => {
    return (
        <section id="servicos" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-4xl py-6 text-center text-blue-600 font-bold">Serviços</h2>
                <ListServicos />
            </div>
        </section>
    );
}
export default Servicos;