import axios from "axios";

export default async function ContentArtigos({params, searchParams} : any) {
    const search = (searchParams.s) ? searchParams.s : "";
    const slug = params.slug;
    const artigos = await axios.get('http://localhost:4000/artigos', {
        params: {
            search,
            page: slug
        }
    });
    return artigos;
}