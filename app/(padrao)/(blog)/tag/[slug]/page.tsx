import ArchiveBlog from "@/app/(blog)/blog/page";

const TagPage = ({params, searchParams}: any) => {
    return(
        <ArchiveBlog params={params} searchParams={searchParams} />
    )
}
export default TagPage;