'use client';

import React from 'react';

function CustomButton() {
    return (
        <button
            onClick={() => {
                alert('안녕하세요!');
            }}
        >
            클릭
        </button>
    );
}

export default CustomButton;
