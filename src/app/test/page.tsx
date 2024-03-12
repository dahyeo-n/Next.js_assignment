'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const TestLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    useEffect(() => {
        console.log('최초 렌더링 시에만 호출됩니다.');
    }, []);

    return (
        <div className="m-8 p-8">
            <h1>테스트 페이지</h1>
            <p>테스트 경로 하위에서의 이동을 확인해봅니다.</p>
            <nav className="p-4 m-4 border-y-4 border-indigo-500">
                <ul>
                    <li
                        onClick={() => {
                            router.push('/test');
                        }}
                    >
                        테스트 페이지
                    </li>
                    <li
                        onClick={() => {
                            router.push('/test/1');
                        }}
                    >
                        테스트 페이지 1
                    </li>
                    <li
                        onClick={() => {
                            router.push('/test/2');
                        }}
                    >
                        테스트 페이지 2
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default TestLayout;
