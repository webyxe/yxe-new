"use client"
import React from 'react';
import BlogSearch from '../parts/blog/search';
import BlogTags from '../parts/blog/tags';
import BlogRecentes from '../parts/blog/recentes';
import ContentArtigos from '../dados/contentArtigos';
import BlogPagination from '../parts/blog/pagination';

export default function Page({searchParams}: any) {
    const listArtigos = (searchParams.s) ? ContentArtigos.filter(artigo => artigo.title.includes(searchParams.s)): ContentArtigos;
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap md:flex-row-reverse">
                        <div className="md:w-1/3 lg:w-1/4 px-4  md:block">
                            <aside>
                                <BlogSearch />
                                <BlogRecentes artigos={ContentArtigos} />
                                <BlogTags />
                            </aside>
                        </div>
                        <div className="w-full md:w-2/3 lg:w-3/4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                                {
                                    listArtigos.map((artigoCurrent) => (
                                        <div key={artigoCurrent.img} className="px-2 py-4 h-full transform hover:scale-105 transition duration-500">
                                            <a href={"/blog/" + artigoCurrent.slug} className="h-full">
                                                <div className="bg-gray-200 rounded-xl h-full overflow-hidden">
                                                    <img src={artigoCurrent.img} className="w-full object-cover aspect-video rounded-t-xl md:rounded-t-2xl lazyloaded" alt="" />
                                                    <div className="px-3 md:px-6 pt-3 md:pt-6 pb-2 md:pb-4 uppercase">
                                                        <h3 className="text-xs md:text-sm xl:text-base text-orange-600 font-medium pb-3 md:pb-6">{artigoCurrent.title}</h3>
                                                        <div className="text-blue-500 text-right py-2 text-sm md:text-base font-bold">VER MAIS</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                }   
                            </div>
                            <BlogPagination />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
