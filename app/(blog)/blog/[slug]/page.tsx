import ContentArtigosSingle from "@/app/dados/contentArtigosSingle";
import { LoadingSinglePost } from "@/app/parts/estrutura/loading";
import parse from 'html-react-parser';
import { Suspense } from "react";

export async function SingleSlug({ params }: any) {

    const paramsSlug = params.slug;
    const artigoCurrent = await ContentArtigosSingle({ paramsSlug });

    if (artigoCurrent) {
        return (
            <div className="w-full md:w-2/3 lg:w-3/4">
                <div className="">
                    <h1 className='text-2xl mb-4'>{artigoCurrent.data.title}</h1>
                    {parse(artigoCurrent.data.content)}
                </div>
            </div>
        )
    }
    return null;
}

export default function PageBlogSingle({ ...props }: any) {
    return (
        <Suspense fallback={<LoadingSinglePost />}>
            <SingleSlug {...props} />
        </Suspense>
    )
}
