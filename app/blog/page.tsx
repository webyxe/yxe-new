"use client"
import React from 'react';

export default function Page() {
    const artigos = [
        {
            slug: "chatbots-serao-o-futuro-do-atendimento-ao-cliente",
            title: "Chatbots serão o futuro do atendimento ao cliente",
            img: "/files/artigos/chatbot-o-futuro-do-atendimento.png",
        },
        {
            slug: "linkedin-ads-guia-basico-para-criacao-de-anuncios-eficazes-no-linkedin",
            title: "Linkedin Ads: Guia Básico para criação de Anúncios eficazes no linkedin",
            img: "/files/artigos/video-patrocinado-no-linkedin.png",
        },
        {
            slug: "estas-sao-as-principais-tendencias-de-marketing-para-2022",
            title: "Estas são as principais tendências de marketing para 2022",
            img: "/files/artigos/5-ferramentas-para-redes-sociais-que-voce-precisa-conhecer.png",
        },
    ];
    return (
        <main>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap md:flex-row-reverse">
                        <div className="md:w-1/3 lg:w-1/4 px-4  md:block">
                            <aside>
                                <div className="mb-4 md:mb-10">
                                    <form action="/" method="GET">
                                        <div className="flex md:block">
                                            <h3 className="hidden md:block text-xl my-2 font-medium text-blue-500 uppercase">
                                                Pesquisar
                                            </h3>
                                            <input name="s" type="text"
                                                className="w-full py-3 px-4 rounded-l-lg md:rounded-lg text-base font-medium border text-gray-500 col-span-2"
                                                placeholder="DIGITE SUA BUSCA" />
                                            <button
                                                className="bg-blue-500 text-gray-100 hover:bg-red-800 hover:text-gray-100 font-medium rounded-r-full md:rounded-full md:my-4 py-2 px-10 block text-base uppercase">
                                                Pesquisar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="mb-4 md:mb-10 hidden md:block">
                                    <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">
                                        Mais Recentes
                                    </h3>
                                    {
                                        artigos.map((artigoCurrent) => (
                                            <div  key={artigoCurrent.slug} className="w-full py-2">
                                                <a href={"/blog/" + artigoCurrent.slug}>
                                                    <div className="rounded-xl bg-gray-200 overflow-hidden shadow-lg shadow-gray-300 flex">
                                                        <div className="w-1/3 bg-center bg-cover" style={{ backgroundImage: "url('" + artigoCurrent.img + "')" }}></div>
                                                        <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                                                            <h3 className="text-xs text-orange-600 font-medium pb-2">
                                                                {artigoCurrent.title}
                                                            </h3>
                                                            <div className="text-blue-500 text-right py-2 text-xs font-bold">
                                                                VER MAIS
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="mb-2 md:mb-10">
                                    <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">
                                        Tags
                                    </h3>
                                    <div className="my-2 flex flex-wrap md:block">
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Jogos
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Web
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Fotografia
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Filmagem
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Marketing
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Mídia Social
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Design
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <span
                                                    className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-white font-bold uppercase border md:border-2 border-blue-500">
                                                    Música
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="w-full md:w-2/3 lg:w-3/4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                                {
                                    artigos.map((artigoCurrent) => (
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
                            <div className="mx-auto block text-center my-8">
                                <ul className="inline-flex -space-x-px">
                                    <li>
                                        <a className="py-2 px-3 text-white bg-blue-500 border border-gray-300">
                                            1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="py-2 px-3 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-red-100"
                                            href="/page/2/">
                                            2
                                        </a>
                                    </li>
                                    <li>
                                        <a className="py-2 px-3 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-red-100"
                                            href="/page/3/">
                                            3
                                        </a>
                                    </li>
                                    <li>
                                        <a className="py-2 px-3 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-red-100"
                                            href="/page/23/">
                                            23
                                        </a>
                                    </li>
                                    <li>
                                        <a className="py-2 px-3 leading-tight text-blue-500 bg-white rounded-r-lg border border-gray-300 hover:bg-red-100"
                                            href="/page/2/">
                                            Próximo »
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
