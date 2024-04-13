import axios from "axios";

export default async function ContentArtigosSingle({paramsSlug} : any) {
    const search = paramsSlug;
    const artigos = await axios.get('https://api.yxe.com.br/artigos/single', {
        params: {
            search
        }
    });
    return artigos;
}