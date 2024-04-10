import Image from "next/image";
import Link from "next/link";
import PaginationElement from "../estrutura/paginationElement";
import ContentArtigos from "@/app/dados/contentArtigos";

export default async function ListArtigos({ params, searchParams }: any) {

    const { data } = await ContentArtigos({ params, searchParams });
    const { artigos, countTotal, pageCurrent, quantityPerPage } = data;
    return (

        <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                {
                    artigos.map((artigoCurrent: any) => (
                        <div key={artigoCurrent.id} className="px-2 py-4 h-full transform hover:scale-105 transition duration-500">
                            <Link href={"/blog/" + artigoCurrent.slug} className="h-full">
                                <div className="bg-gray-200 rounded-xl h-full overflow-hidden">
                                    <Image src={"/files/artigos/" + artigoCurrent.img} width={296} height={166} className="w-full object-cover aspect-video rounded-t-xl md:rounded-t-2xl lazyloaded" alt="" />
                                    <div className="px-3 md:px-6 pt-3 md:pt-6 pb-2 md:pb-4 uppercase">
                                        <h3 className="text-xs md:text-sm xl:text-base text-orange-600 font-medium pb-3 md:pb-6">{artigoCurrent.title}</h3>
                                        <div className="text-blue-500 text-right py-2 text-sm md:text-base font-bold">VER MAIS</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <PaginationElement params={params} countTotal={countTotal} pageCurrent={pageCurrent} quantityPerPage={quantityPerPage} searchParams={searchParams} />
        </div>
    )
}