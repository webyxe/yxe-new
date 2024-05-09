import Footer from "../parts/estrutura/footer";
import About from "../parts/landing/about";
import Banner from "../parts/landing/banner";
import Call from "../parts/landing/call";
import Contato from "../parts/landing/contato";
import Header from "../parts/landing/header";
import Legado from "../parts/landing/legado";
import Motivos from "../parts/landing/motivos";
import Servicos from "../parts/landing/servicos";

export default function Page() {
    return(
        <>
            <Header />
            <Banner />
            <About />
            <Legado />
            <Motivos />
            <Servicos />
            <Call />
            <Contato />
            <Footer />
        </>
    )
}