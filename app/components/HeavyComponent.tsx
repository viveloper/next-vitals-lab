// app/components/HeavyComponent.tsx
'use client'; // <-- 1. "클라이언트 컴포넌트"로 전환합니다.

import {useEffect} from 'react'; // 2. useEffect 임포트

/**
 * TBT(총 차단 시간)를 유발하는 무거운 "클라이언트" 컴포넌트
 * 이 컴포넌트가 하이드레이션 된 후 메인 스레드를 차단합니다.
 */
export default function HeavyComponent() {

    // 3. 하이드레이션 이후에 메인 스레드를 차단하도록 useEffect 사용
    useEffect(() => {
        // 의도적으로 500ms 동안 메인 스레드를 차단하는 복잡한 연산 시뮬레이션
        const startTime = performance.now();
        while (performance.now() - startTime < 500) {
            // 500ms 동안 루프 실행 (블로킹)
        }
    }, []); // 컴포넌트 마운트 시 1회 실행

    return (
        <div style={{padding: '2rem', backgroundColor: '#eee', margin: '1rem 0'}}>
            <h3>TBT 유발 컴포넌트 (Client)</h3>
            <p>
                이 컴포넌트가 렌더링된 후 500ms간 메인 스레드를 차단합니다.
                (하이드레이션 비용 시뮬레이션)
            </p>
        </div>
    );
}