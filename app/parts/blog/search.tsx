import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BlogSearch({params}: any) {
    const placeholderSearch = (params) ? params.s: null;
    return (
        <div className="mb-4 md:mb-10">
            <form action="/blog" method="GET">
                <div className="flex md:block">
                    <h3 className="hidden md:block text-xl my-2 font-medium text-blue-500 uppercase">Pesquisar</h3>
                    <input name="s" type="text" className="w-full py-3 px-4 rounded-l-lg md:rounded-lg text-base font-medium border text-gray-500 col-span-2" value={placeholderSearch} placeholder="DIGITE SUA BUSCA" />
                    <button className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium rounded-r-full md:rounded-full md:my-4 py-2 px-2 md:px-10 flex justify-center items-center text-base uppercase">
                        <FontAwesomeIcon icon={faSearch} className="m-2" />
                        Pesquisar
                    </button>
                </div>
            </form>
        </div>
    )
}