import ContentArtigosSingle from "@/app/dados/contentArtigosSingle";
import BlogSearch from "@/app/parts/blog/search";
import BlogTags from "@/app/parts/blog/tags";
import parse from 'html-react-parser';

export default async function PageBlogSingle({ params }: any) {
    const paramsSlug = params.slug;
    const artigoCurrent = await ContentArtigosSingle({paramsSlug});
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap md:flex-row-reverse">
                        <div className="md:w-1/3 lg:w-1/4 px-4  md:block">
                            <aside>
                                <BlogSearch />
                                {/* <BlogRecentes artigos={ContentArtigos} /> */}
                                <BlogTags />    
                            </aside>
                        </div>
                        <div className="w-full md:w-2/3 lg:w-3/4">
                            <div className="">
                                <h1 className='text-2xl mb-4'>{artigoCurrent.data.title}</h1>
                                {parse(artigoCurrent.data.content)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
