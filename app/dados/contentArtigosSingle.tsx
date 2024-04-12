import axios from "axios";

export default async function ContentArtigosSingle({paramsSlug} : any) {
    const search = paramsSlug;
    const artigos = await axios.get('https://agenciayxeapi.vercel.app/artigos/single', {
        params: {
            search
        }
    });
    return artigos;
}