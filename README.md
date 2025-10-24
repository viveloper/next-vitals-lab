## Deep FE & Performance (Next.js)

- **미션 1 (FE/성능): App Router 기반 Core Web Vitals 최적화 (1일)**

    - **내용:** 일부러 느리게 만든 Next.js 페이지(LCP 유발 이미지, 무거운 폰트, CLS 유발 컴포넌트)를 준비

    - **실무 능력:** `next/image`, `next/font`, `next/dynamic`을 사용한 최적화.

    - **문제 해결:** Lighthouse 리포트를 90점 이상으로 개선. `Suspense`와 `Streaming`을 적용하여 TBT(Total Blocking Time) 개선.

    - **이론:** Core Web Vitals, RSC와 스트리밍의 원리, 하이드레이션(Hydration) 비용.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
