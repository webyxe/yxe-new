import Footer from "@/app/parts/estrutura/footer";
import Header from "@/app/parts/estrutura/header";

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