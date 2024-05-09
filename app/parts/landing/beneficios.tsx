import ListBeneficios from "@/app/parts/landing/listBeneficios";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";

const Beneficios = () => {
    return (
        <section className="py-8 md:py-20 bg-beneficios bg-cover bg-center bg-orange-500 bg-servicos">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-3xl uppercase py-6 text-center text-white">Nossos Serviços:</h2>
                <ListBeneficios />
                <Link href={ContentLinks.whatsapp}><div className="text-white text-center py-8 text-lg">E muito mais...</div></Link>
            </div>
        </section>
    );
}
export default Beneficios;