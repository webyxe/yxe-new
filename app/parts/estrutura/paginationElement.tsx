import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination";

export default function PaginationElement({countTotal, pageCurrent, quantityPerPage}: any) {
    return (
        <Pagination className='text-blue-500 my-4'>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious className='hover:!text-orange-500 hover:bg-gray-100' href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className='hover:!text-orange-500 hover:bg-gray-100' href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className='hover:!text-orange-500 hover:bg-gray-100' href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className='hover:!text-orange-500 hover:bg-gray-100' href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis className='hover:!text-orange-500 hover:bg-gray-100' />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext className='hover:!text-orange-500 hover:bg-gray-100' href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}