import ListBeneficios from "@/app/parts/landing/listBeneficios";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";

const Beneficios = () => {
    return (
        <section className="py-20 bg-beneficios bg-cover bg-center bg-orange-500 bg-servicos">
            <div className="container mx-auto px-4">
                <h2 className="text-xl md:text-3xl uppercase py-6 text-center text-white">Nossos Serviços:</h2>
                <ListBeneficios />
                <Link href={ContentLinks.whatsapp}><button type="button" className="block mx-auto bg-blue-600 hover:bg-blue-700 transition text-white font-medium rounded-md my-2 py-3 px-8 text-base uppercase">EU QUERO ECONOMIZAR</button></Link>
            </div>
        </section>
    );
}
export default Beneficios;