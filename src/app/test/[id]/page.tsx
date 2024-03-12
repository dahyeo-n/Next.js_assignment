import React from 'react';

function TestDetailPage({
    // dynamic route
    // params를 인자로 받음! [id]로 이 파일에 들어올 거니까
    params,
}: {
    params: {
        id: string;
    };
}) {
    return <div>Detail Page: {params.id}</div>;
}

export default TestDetailPage;
