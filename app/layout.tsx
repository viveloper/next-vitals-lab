// app/layout.tsx
import './globals.css';

export const metadata = {
    title: '느린 페이지',
    description: 'CWV 최적화 미션',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        {/* body 태그에 직접 폰트 클래스를 적용하지 않아
        next/font의 자동 최적화 이점을 받지 못하게 합니다.
      */}
        <body>{children}</body>
        </html>
    );
}