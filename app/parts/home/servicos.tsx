import ContentServicos from "@/app/dados/contentServicos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Servicos = () => {
    return (
        <section id="servicos" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-4xl py-6 text-center text-blue-600 font-bold">Serviços</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-4">
                    {
                        ContentServicos.map((singleServicos) => (
                            <Link href="#" key={singleServicos.slug}>
                                <div className="bg-orange-600 sm:h-64 rounded-xl sm:rounded-3xl text-center flex flex-col justify-center items-center text-white text-lg sm:text-2xl px-2 py-4 md:p-4">
                                    <FontAwesomeIcon icon={singleServicos.icon} className="h-10 w-10 text-4xl mx-auto text-gray-200" />
                                    <h3 className="text-xs md:text-base md:text-xl py-4 text-gray-200">{singleServicos.title}</h3>
                                    <h3 className="text-xs md:text-sm text-gray-200 font-light">{singleServicos.content}</h3>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
export default Servicos;