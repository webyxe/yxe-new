import React, { Suspense } from 'react';
import ListArtigos from '@/app/parts/blog/listArtigos';
import LoadingPosts from '@/app/parts/estrutura/loading';

export default function ArchiveBlog({ ...props }: any) {
    return (
        <Suspense fallback={<LoadingPosts />}>
            <ListArtigos {...props} />
        </Suspense>
    )
}
