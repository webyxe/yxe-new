import Footer from "../parts/estrutura/footer";
import About from "../parts/landing/about";
import Banner from "../parts/landing/banner";
import Beneficios from "../parts/landing/beneficios";
import Call from "../parts/landing/call";
import Contato from "../parts/landing/contato";
import Header from "../parts/landing/header";
import Motivos from "../parts/landing/motivos";
import Politicos from "../parts/landing/politicos";

export default function Page() {
    return(
        <>
            <Header />
            <Banner />
            <About />
            <Politicos />
            <Motivos />
            <Beneficios />
            <Call />
            <Contato />
            <Footer />
        </>
    )
}