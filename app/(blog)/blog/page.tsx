import React, { Suspense } from 'react';
import BlogSearch from '@/app/parts/blog/search';
import BlogTags from '@/app/parts/blog/tags';
import BlogRecentes from '@/app/parts/blog/recentes';
import ListArtigos from '@/app/parts/blog/listArtigos';
import LoadingPosts from '@/app/parts/estrutura/loading';

export default function ArchiveBlog({ ...props }: any) {
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap md:flex-row-reverse">
                        <div className="md:w-1/3 lg:w-1/4 px-4  md:block">
                            <aside>
                                <BlogSearch params={props.searchParams} />
                                <BlogRecentes />
                                <BlogTags />
                            </aside>
                        </div>
                        <Suspense fallback={<LoadingPosts />}>
                            <ListArtigos {...props} />
                        </Suspense>
                    </div>
                </div>
            </section>
        </main>
    )
}
