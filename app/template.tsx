import Footer from "./parts/estrutura/footer";
import Header from "./parts/estrutura/header";

const Template = ({children}:any) => {
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default Template;