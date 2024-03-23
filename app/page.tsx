import Banner from "./parts/home/banner";
import Canais from "./parts/home/canais";
import Contato from "./parts/home/contato";
import Estrutura from "./parts/home/estrutura";
import Portfolio from "./parts/home/portfolio";
import QuemSomos from "./parts/home/quem-somos";
import Servicos from "./parts/home/servicos";


export default function Home() {
    return (
        <div>
            <Banner />
            <QuemSomos />
            <Servicos />
            <Estrutura />
            <Portfolio />
            <Canais />
            <Contato />
        </div>
    );
}
