import HeaderTitle from "@/app/parts/estrutura/headerTitle";

export default function TemplateBlog({children}: any) {
    return(
        <>
            <HeaderTitle titlePage="Blog" />
            {children}
        </>
    )
}