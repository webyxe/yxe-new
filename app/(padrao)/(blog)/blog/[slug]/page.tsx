import SingleSlug from "@/app/parts/blog/singleSlug";
import { LoadingSinglePost } from "@/app/parts/estrutura/loading";

import { Suspense } from "react";

export default function PageBlogSingle({ ...props }: any) {
    return (
        <Suspense fallback={<LoadingSinglePost />}>
            <SingleSlug {...props} />
        </Suspense>
    )
}
