# 📦 @joblonnie/eslint-config

내 프로젝트에서 공통으로 쓰기 위해 만든 개인용 ESLint 설정입니다.
React + TypeScript 환경을 기본으로 하고, import 정리와 unused import 제거 규칙을 포함합니다.

## 🚀 설치 & 사용법

### 1. 패키지 설치

```bash
pnpm add -D @joblonnie/eslint-config
```

### 2. 필수 peerDependencies 설치

이 config를 사용하려면 아래 패키지들이 반드시 필요합니다.

pnpm add -D eslint @eslint/js typescript typescript-eslint eslint-plugin-react eslint-plugin-unused-imports eslint-plugin-simple-import-sort globals

👉 버전은 peerDependencies에 정의된 범위를 맞춰주면 됩니다.

### 3. 프로젝트 루트에 eslint.config.mjs 생성

```
import config from "@joblonnie/eslint-config";

export default config;
```

### 4. package.json 스크립트 추가

```
{
    "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
    }
}
```

## 🔑 GitHub Packages 접근 설정
이 패키지는 GitHub Packages에 배포되어 있습니다.
내 프로젝트에서 쓰려면 .npmrc에 GitHub Token을 등록해야 합니다.

```
@joblonnie:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## 📖 포함된 규칙
- unused-imports: 사용하지 않는 import 자동 에러 처리
- simple-import-sort: import/export 정렬
- react/recommended: React 권장 규칙
- typescript-eslint/recommended: TypeScript 권장 규칙
- no-console: warn, no-debugger: error

## ⚠️ Next.js 프로젝트에서 사용할 때
Next.js 기본 ESLint 설정(eslint-config-next) 대신 이 설정을 쓰려면:
```
pnpm remove eslint eslint-config-next
pnpm add -D eslint@^9 @eslint/js
```
