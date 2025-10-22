// app/page.tsx
import HeavyComponent from './components/HeavyComponent';
import CLSComponent from './components/CLSComponent';
import styles from './Page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Core Web Vitals 최적화 미션</h1>

            {/* 문제 1: CLS (Cumulative Layout Shift) 유발
        - 이 컴포넌트는 1초 뒤에 100px 높이로 나타나면서 레이아웃을 밀어냅니다.
      */}
            <CLSComponent/>

            <p className={styles.description}>
                이 페이지는 의도적으로 느리게 만들어졌습니다.
            </p>

            {/* 문제 2: LCP (Largest Contentful Paint) 유발
        - next/image 대신 일반 <img> 태그 사용
        - 매우 큰 고해상도 이미지 (약 1.8MB)
        - priority 속성 없음
      */}
            <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=3868&auto=format&fit=crop"
                alt="느린 이미지"
                className={styles.slowImage}
            />

            <p>
                위 이미지는 LCP를 유발하는 주범입니다.
                일반 img 태그로 로드되어 최적화되지 않았습니다.
            </p>

            {/* 문제 3: TBT (Total Blocking Time) 유발
        - 렌더링 시 메인 스레드를 500ms간 차단하는 무거운 컴포넌트입니다.
      */}
            <HeavyComponent/>

            <div className={styles.grid}>
                {/* ... (이하 생략) ... */}
            </div>
        </main>
    );
}