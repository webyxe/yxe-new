import Template from "./(padrao)/template";
import Banner from "./parts/home/banner";
import Canais from "./parts/home/canais";
import Contato from "./parts/home/contato";
import Estrutura from "./parts/home/estrutura";
import QuemSomos from "./parts/home/quem-somos";
import Servicos from "./parts/home/servicos";
import VideoHome from "./parts/home/videoHome";


export default function Home() {
    return (
        <div>
            <Template>
                <Banner />
                <QuemSomos />
                <Servicos />
                <Estrutura />
                {/* <Portfolio /> */}
                <VideoHome />
                <Canais />
                <Contato />
            </Template>
        </div>
    );
}
