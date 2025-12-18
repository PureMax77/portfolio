# 포트폴리오 웹사이트

6년차 시니어 프론트엔드 개발자의 포트폴리오 웹사이트입니다.

## 🚀 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 UI
- **다크모드**: 시스템 테마 감지 및 수동 전환 지원
- **프로젝트 필터링**: 기술 스택과 역할별로 프로젝트 필터링
- **매끄러운 애니메이션**: Framer Motion을 활용한 부드러운 전환 효과
- **SEO 최적화**: 메타데이터 및 오픈그래프 최적화

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## 📦 설치 및 실행

### 패키지 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 프로덕션 빌드

```bash
npm run build
npm run start
# 또는
yarn build
yarn start
# 또는
pnpm build
pnpm start
```

## 📝 커스터마이징

### 개인 정보 수정

1. **Hero Section**: `components/Hero.tsx`에서 이름, 소개, 기술 스택 수정
2. **About Section**: `components/About.tsx`에서 경력, 성과, 기술 스킬 수정
3. **Projects**: `data/projects.ts`에서 프로젝트 정보 수정
4. **Contact**: `components/Contact.tsx`에서 연락처 정보 수정

### 메타데이터 수정

`app/layout.tsx`에서 SEO 관련 메타데이터를 수정할 수 있습니다.

### 색상 테마 변경

`tailwind.config.ts`에서 primary 색상을 변경하여 전체 테마를 커스터마이징할 수 있습니다.

## 📁 프로젝트 구조

```
portfolio/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 및 메타데이터
│   ├── page.tsx            # 메인 페이지
│   └── globals.css         # 글로벌 스타일
├── components/
│   ├── Header.tsx          # 네비게이션 헤더
│   ├── Hero.tsx            # Hero 섹션
│   ├── About.tsx           # About 섹션
│   ├── Projects.tsx        # Projects 섹션
│   ├── Contact.tsx         # Contact 섹션
│   ├── Footer.tsx          # Footer
│   ├── ThemeProvider.tsx   # 테마 프로바이더
│   └── ThemeToggle.tsx     # 다크모드 토글
├── data/
│   └── projects.ts         # 프로젝트 데이터
├── types/
│   └── project.ts          # 프로젝트 타입 정의
└── public/                 # 정적 파일 (이미지, 이력서 등)
```

## 🌐 배포

### Vercel (권장)

이 프로젝트는 Vercel에 최적화되어 있습니다.

1. GitHub 저장소에 프로젝트 푸시
2. [Vercel](https://vercel.com)에서 Import
3. 자동으로 빌드 및 배포 완료

### 기타 플랫폼

- Netlify
- AWS Amplify
- CloudFlare Pages

## 📄 라이선스

MIT License

## 🤝 기여

버그 리포트나 기능 제안은 이슈를 통해 제출해주세요.

