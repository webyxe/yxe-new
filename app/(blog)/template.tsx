import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import BlogRecentes from "@/app/parts/blog/recentes";
import BlogSearch from "@/app/parts/blog/search";
import BlogTags from "@/app/parts/blog/tags";
import { Suspense } from "react";

export default function TemplateBlog({ children }: any) {
    return (
        <>
            <HeaderTitle titlePage="Blog" />
            <main>
                <section className="py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap md:flex-row-reverse">
                            <div className="md:w-1/3 lg:w-1/4 px-4 md:block">
                                <aside>
                                    <Suspense>
                                        <BlogSearch  />
                                    </Suspense>
                                    <BlogRecentes />
                                    <BlogTags />
                                </aside>
                            </div>
                            {children}
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}