import React from 'react';

function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <p>Admin Page가 놓이는 곳입니다</p>
            {children}
        </div>
    );
}

export default AdminLayout;
