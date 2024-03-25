"use client"

import { usePathname } from "next/navigation";
import Footer from "./parts/estrutura/footer";
import Header from "./parts/estrutura/header";
import HeaderTitle from "./parts/estrutura/headerTitle";

const Template = ({children}:any) => {
    const isHome = usePathname();
    return(
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default Template;