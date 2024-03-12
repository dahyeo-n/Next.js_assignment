'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const TestTemplate = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    useEffect(() => {
        console.log('최초 렌더링 시에만 호출됩니다.');
    }, []);

    return (
        <div className="m-8 p-8">
            <h1>테스트 페이지</h1>
            <p>테스트 경로 하위에서의 이동을 확인해봅니다.</p>
            <nav>
                <ul>
                    <Link href={'/test'}>테스트 페이지</Link>
                    <Link href={'/test/1'}>테스트 페이지1</Link>
                    <Link href={'/test/2'}>테스트 페이지2</Link>
                </ul>
            </nav>
            {children}
        </div>
    );
};

export default TestTemplate;
