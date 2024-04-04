import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination";


export default function PaginationElement({ countTotal, pageCurrent, quantityPerPage, searchParams }: any) {

    const quantityPage = Math.ceil(countTotal / quantityPerPage);
    const initialpage = (pageCurrent > 1) ? (pageCurrent - 1) : 1;
    const searchCurrent = (searchParams > 1) ? "?s=" + searchParams : "";
    let rows = [];
    for (var n = initialpage; n <= quantityPage && n <= pageCurrent + 1; n++) {
        rows.push(n);
    }
    if (quantityPage > 1) {
        return (
            <Pagination className='text-blue-500 my-4'>
                <PaginationContent>
                    {
                        pageCurrent > 1 ? (
                            <PaginationItem>
                                <PaginationPrevious className='hover:!text-orange-500 hover:bg-gray-100' href={"/blog/p/" + (pageCurrent - 1) + searchCurrent} />
                            </PaginationItem>
                        ) : null
                    }
                    {
                        rows.map((row) => (
                            <PaginationItem key={row}>
                                <PaginationLink className='hover:!text-orange-500 hover:bg-gray-100' href={"/blog/p/" + row + searchCurrent}>{row}</PaginationLink>
                            </PaginationItem>
                        ))
                    }
                    {
                        pageCurrent < quantityPage ? (
                            <PaginationItem>
                                <PaginationNext className='hover:!text-orange-500 hover:bg-gray-100' href={"/blog/p/" + (pageCurrent + 1) + searchCurrent} />
                            </PaginationItem>
                        ) : null
                    }
                </PaginationContent>
            </Pagination>
        )
    }
    return null;
}