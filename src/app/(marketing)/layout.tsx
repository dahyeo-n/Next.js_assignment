import React from 'react';

function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <p>여기는 마케팅과 관련된 페이지가 놓이는 곳이에요!</p>
            {children}
        </div>
    );
}

export default MarketingLayout;
