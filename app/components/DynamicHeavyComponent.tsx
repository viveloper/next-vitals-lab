// app/components/DynamicHeavyComponent.tsx
'use client';

import dynamic from 'next/dynamic';
import {Suspense} from 'react';

const HeavyComponent = dynamic(
    () => import('./HeavyComponent'),
    {ssr: false}
);

export default function DynamicHeavyComponent() {
    return (
        <Suspense fallback={<div>Loading heavy component...</div>}>
            <HeavyComponent/>
        </Suspense>
    );
}