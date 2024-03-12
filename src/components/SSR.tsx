// src>components>rendering>SSR.tsx
import React from 'react';
import type { RandomCatInfo } from '@/types';

const SSR = async () => {
    const response = await fetch(`https://catfact.ninja/fact`, {
        cache: 'no-cache',
    });

    const catInfo: RandomCatInfo = await response.json();

    return (
        <div className="mt-8">
            <div className="border p-4 my-4">
                <div className="flex gap-8">
                    <div>
                        <h2 className="text-xl font-bold">Cat Information</h2>
                        <p className="text-white-600">{catInfo.fact}</p>
                        <p className="text-white-600">{catInfo.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SSR;
