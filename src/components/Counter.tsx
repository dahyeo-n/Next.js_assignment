'use client';

import { useEffect, useState } from 'react';

import React from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
    }, []);

    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <div>{count}</div>
            <button onClick={handleClick}>클릭</button>
        </div>
    );
}

export default Counter;
