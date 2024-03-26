import Link from "next/link";

export default function BlogTags() {
    return (
        <div className="mb-2 md:mb-10">
            <h3 className="text-xl my-2 font-medium text-blue-500 uppercase">Tags</h3>
            <div className="my-2 flex flex-wrap gap-2 md:gap-4">
                <div>
                    <Link href="">
                        <span className="block py-2 px-2 md:px-3 text-xs md:text-base border md:border-2 border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white transition-all font-bold">
                            Dicas
                        </span>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}