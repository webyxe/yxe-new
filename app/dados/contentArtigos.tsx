import axios from "axios";

export default async function ContentArtigos({searchParams} : any) {
    const search = searchParams.s;
    const artigos = await axios.get('http://localhost:4000/artigos', {
        params: {
            search
        }
    });
    return artigos;
}