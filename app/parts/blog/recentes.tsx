import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default async function BlogRecentes() {
    const { data } = await axios.get('http://localhost:4000/artigos/recentes');
    return (

        <div className="mb-4 md:mb-10 hidden md:block">
            <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">Mais Recentes</h3>
            {
                data.map((artigoCurrent:any) => (
                    <div key={artigoCurrent.slug} className="w-full py-2">
                        <Link href={"/blog/" + artigoCurrent.slug}>
                            <div className="rounded-xl bg-gray-200 overflow-hidden shadow-lg shadow-gray-300 flex">
                                <Image className="w-1/3 bg-center bg-cover object-cover" width={103} height={108} src={"/files/artigos/" + artigoCurrent.img} />
                                <div className="w-2/3 px-4 pt-4 pb-1 uppercase">
                                    <h3 className="text-xs text-orange-600 font-medium pb-2">
                                        {artigoCurrent.title}
                                    </h3>
                                    <div className="text-blue-500 text-right py-2 text-xs font-bold">
                                        VER MAIS
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}