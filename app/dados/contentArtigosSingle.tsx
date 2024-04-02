import axios from "axios";

export default async function ContentArtigosSingle({paramsSlug} : any) {
    const search = paramsSlug;
    const artigos = await axios.get('http://localhost:4000/artigossingle', {
        params: {
            search
        }
    });
    return artigos;
}