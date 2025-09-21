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

## 📝 버전 관리 & 릴리즈 노트

### 🔄 버전 관리 원칙

이 패키지는 [Semantic Versioning](https://semver.org/)을 따릅니다:

- **MAJOR** (1.x.x): 기존 설정과 호환되지 않는 변경
- **MINOR** (x.1.x): 새로운 규칙 추가, 기존 설정과 호환 가능
- **PATCH** (x.x.1): 버그 수정, 문서 업데이트

### 📋 릴리즈 노트

각 버전의 자세한 변경사항은 `version/` 폴더에서 확인할 수 있습니다:

- [v1.0.0](./version/v1.0.0.md) - 최초 릴리즈

### 🚀 릴리즈 프로세스

1. **변경사항 커밋** (Conventional Commits 규칙 준수)
2. **버전 업데이트 및 자동 릴리즈 노트 생성**
   ```bash
   pnpm release
   ```
   > 이 명령은 자동으로:
   >
   > - 버전을 적절히 증가시키고
   > - CHANGELOG.md를 업데이트하고
   > - `version/vX.X.X.md` 릴리즈 노트 템플릿을 생성합니다
3. **생성된 릴리즈 노트 편집** (`version/vX.X.X.md` 파일 내용 수정)
4. **릴리즈 노트 커밋**
   ```bash
   git add version/
   git commit -m "docs: v버전 릴리즈 노트 작성"
   ```
5. **변경사항 확인 후 푸시**
   ```bash
   git push --follow-tags origin main
   ```
6. **GitHub Packages에 배포**
   ```bash
   pnpm publish
   ```

## ⚠️ Next.js 프로젝트에서 사용할 때

Next.js 기본 ESLint 설정(eslint-config-next) 대신 이 설정을 쓰려면:

```
pnpm remove eslint eslint-config-next
pnpm add -D eslint@^9 @eslint/js
```
