# 📦 @joblonnie/eslint-config

**공통 ESLint 설정**을 모아놓은 패키지입니다.  
React + TypeScript + import 정리 + unused import 제거 규칙을 포함합니다.

## 🔑 GitHub Packages 접근 설정

이 패키지는 GitHub Packages에 배포되어 있기 때문에,  
설치하려면 `.npmrc` 파일에 GitHub Personal Access Token을 등록해야 합니다.

1. GitHub에서 Personal Access Token 발급

   - 권한: `read:packages`, `write:packages`, `repo`

2. 프로젝트 루트에 `.npmrc` 생성 (또는 수정)

   ```
   @joblonnie:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN

   ```

## 🚀 설치 방법

### 1. 패키지 설치

```bash
pnpm add -D @joblonnie/eslint-config
```

### 2. 필수 peerDependencies 설치

이 config를 사용하려면 아래 패키지들이 반드시 필요합니다.

pnpm add -D eslint @eslint/js typescript typescript-eslint eslint-plugin-react eslint-plugin-unused-imports eslint-plugin-simple-import-sort globals

👉 버전은 peerDependencies에 정의된 범위를 맞춰주면 됩니다.

## ⚙️ 사용법

### 1. 프로젝트 루트에 eslint.config.mjs 생성

```
import config from "@joblonnie/eslint-config";

export default config;
```

### 2. package.json 스크립트 추가

```
{
    "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
    }
}
```

## 🧪 테스트

테스트를 위해 일부러 규칙을 어긴 코드를 작성해보세요:

```
import { useState } from "react";
import fs from "fs"; // unused import

function App() {

    const [count] = useState(0);

    return <h1>{count}</h1>;
}
```

### 검사 실행

```
pnpm lint
```

👉 예상 에러:

unused-imports/no-unused-imports: fs 사용 안 함

### 자동 수정

```
pnpm lint:fix

```

## 📖 포함된 규칙

- unused-imports: 사용하지 않는 import 자동 에러 처리
- simple-import-sort: import/export 정렬
- react/recommended: React 권장 규칙
- typescript-eslint/recommended: TypeScript 권장 규칙
- no-console: warn, no-debugger: error

## ⚠️ Next.js 프로젝트에서 사용할 때

Next.js는 기본적으로 eslint-config-next를 포함합니다.
이 패키지를 사용할 경우 eslint-config-next를 제거하고,
ESLint 9 버전 이상을 설치한 뒤 이 config를 불러오세요.

```
pnpm remove eslint eslint-config-next
pnpm add -D eslint@^9 @eslint/js
```
