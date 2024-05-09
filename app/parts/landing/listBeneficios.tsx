import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faChartSimple, faCheckSquare, faHandHoldingDollar, faHeadset, faMagnifyingGlass, faMicrochip, faMobile, faPeoplePulling, faScrewdriverWrench, faSolarPanel, faUsers } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

export default function listBeneficios() {
    const ContentBeneficios = [
    {
        slug: "economia-de-ate-95-na-sua-conta-de-energia",
        title: "Estratégia de Campanha",
        icon: faBullhorn,
    },
    {
        slug: "instalacao-rapida-facil",
        title: "Gestão de Redes Sociais",
        icon: faMobile,
    },
    {
        slug: "equipamentos-duraveis",
        title: "Publicidade Online",
        icon: faUsers,
    },
    {
        slug: "suporte-tecnico-humanizado",
        title: "Desenvolvimento de Conteúdo",
        icon: faFileLines,
    },
    {
        slug: "tecnologia-de-ponta",
        title: "Análise de Dados",
        icon: faChartSimple,
    },
    {
        slug: "as-melhores-marcas",
        title: "Pesquisa de Mercado",
        icon: faMagnifyingGlass,
    },

]; 
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
            {
                ContentBeneficios.map((singleServicos) => (
                    <div key={singleServicos.slug}>
                        <div className="h-full sm:h-64 bg-white rounded-xl sm:rounded-3xl text-center flex flex-col justify-center items-center text-white text-lg sm:text-2xl px-2 py-4 md:p-4">
                            <FontAwesomeIcon icon={singleServicos.icon} className="h-14 w-14 text-4xl mx-auto text-blue-600" />
                            <h3 className="text-xs md:text-xl py-6 text-black ">{singleServicos.title}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}