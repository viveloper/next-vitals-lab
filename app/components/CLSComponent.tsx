// app/components/CLSComponent.tsx
'use client';

import {useState, useEffect} from 'react';

/**
 * CLS(레이아웃 이동)를 유발하는 컴포넌트
 * 1초 후에 100px 높이의 요소를 렌더링하여 아래 콘텐츠를 밀어냅니다.
 */
export default function CLSComponent() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // 1초 뒤에 갑자기 나타나는 배너/광고 등을 시뮬레이션
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) {
        // 해결 1: CLS 방지를 위해 같은 사이즈의 placeholder를 보여줌
        return <div style={{
            height: '100px',
            width: '100%',
            margin: '1rem 0',
        }}></div>
    }

    // 1초 뒤에 100px 높이의 배너가 렌더링됨
    return (
        <div
            style={{
                height: '100px',
                width: '100%',
                backgroundColor: 'red',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                margin: '1rem 0',
            }}
        >
            [광고] 이 배너가 CLS를 유발합니다!
        </div>
    );
}