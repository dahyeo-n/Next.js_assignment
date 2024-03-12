import React from 'react';
import type { RandomCatInfo } from '@/types';

// SSG TEST : 아무것도 하지 않으면 SSG!
const SSG = async () => {
    // (1) 첫 번째 방법 : 아무 옵션도 부여 X
    const response = await fetch(`https://catfact.ninja/fact`, {
        // (2) 두 번째 방법: force-cache
        cache: 'force-cache',
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

export default SSG;
