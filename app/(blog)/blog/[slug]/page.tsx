import ContentArtigosSingle from "@/app/dados/contentArtigosSingle";
import BlogRecentes from "@/app/parts/blog/recentes";
import BlogSearch from "@/app/parts/blog/search";
import BlogTags from "@/app/parts/blog/tags";
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
}

export default async function PageBlogSingle({ ...props }: any) {
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap md:flex-row-reverse">
                        <div className="md:w-1/3 lg:w-1/4 px-4  md:block">
                            <aside>
                                <BlogSearch />
                                <BlogRecentes />
                                <BlogTags />
                            </aside>
                        </div>
                        <Suspense fallback={<LoadingSinglePost />}>
                            <SingleSlug {...props} />
                        </Suspense>
                    </div>
                </div>
            </section>
        </main>
    )
}
