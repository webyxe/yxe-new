import Link from "next/link";

export default function BlogTags() {
    return (
        <div className="mb-2 md:mb-10">
            <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">Tags</h3>
            <div className="my-2 flex flex-wrap gap-2 md:gap-4">
                <div>
                    <Link href="">
                        <span className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                            Jogos
                        </span>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <span className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                            Web
                        </span>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <span className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                            Fotografia
                        </span>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <span className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                            Filmagem
                        </span>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <span className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                            Marketing
                        </span>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <span className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                            Mídia Social
                        </span>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <span className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                            Design
                        </span>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <span className="inline-block my-1 mx-1 md:mx-0 md:my-2 py-2 px-2 md:px-4 text-xs md:text-base text-blue-500 font-bold uppercase border md:border-2 border-blue-500">
                            Música
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}