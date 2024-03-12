'use client';

import React, { useEffect, useState } from 'react';
import type { RandomCatInfo } from '@/types';

const CSR = () => {
    const [cat, setCat] = useState<RandomCatInfo | null>(null);

    useEffect(() => {
        const fetchCat = async () => {
            const response = await fetch(`https://catfact.ninja/fact`);
            const catInfo: RandomCatInfo = await response.json();
            setCat(catInfo);
        };

        fetchCat();
    }, []);

    if (!cat) {
        return <div>로딩중...</div>;
    }

    return (
        <div className="mt-8">
            <div className="border p-4 my-4">
                <div className="flex gap-8">
                    <div>
                        <h2 className="text-xl font-bold">Cat Information</h2>
                        <p className="text-white-600">{cat.fact}</p>
                        <p className="text-white-600">{cat.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CSR;
