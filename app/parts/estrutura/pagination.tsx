import Link from "next/link";

export default function BlogPagination() {
    return (
        <div className="mx-auto block text-center my-8">
            <ul className="inline-flex -space-x-px">
                <li> 
                    <Link href="#" className="py-2 px-3 text-blue-500 bg-blue-500 border border-gray-300"> 1 </Link>
                </li>
                <li>
                    <Link className="py-2 px-3 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-red-100" href="/page/2/"> 2 </Link>
                </li>
                <li>
                    <Link className="py-2 px-3 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-red-100" href="/page/3/"> 3 </Link>
                </li>
                <li>
                    <Link className="py-2 px-3 leading-tight text-blue-500 bg-white border border-gray-300 hover:bg-red-100" href="/page/23/"> 23 </Link>
                </li>
                <li>
                    <Link className="py-2 px-3 leading-tight text-blue-500 bg-white rounded-r-lg border border-gray-300 hover:bg-red-100" href="/page/2/"> Próximo » </Link>
                </li>
            </ul>
        </div>
    )
}