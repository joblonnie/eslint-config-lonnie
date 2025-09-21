#!/usr/bin/env node

import fs from "fs";
import path from "path";

// package.json에서 현재 버전 읽기
const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
const version = packageJson.version;
const date = new Date().toISOString().split("T")[0];

// 릴리즈 노트 템플릿
const releaseNoteTemplate = `# v${version} (${date})

## 📝 변경사항

이 버전의 주요 변경사항을 여기에 작성하세요.

### ✨ 새로운 기능

- 새로운 기능이 있다면 여기에 작성

### 🐛 버그 수정

- 수정된 버그가 있다면 여기에 작성

### 🔧 개선사항

- 개선된 내용이 있다면 여기에 작성

### 📦 의존성 변경

- 의존성 변경사항이 있다면 여기에 작성

### 💥 Breaking Changes

- 호환성을 깨는 변경사항이 있다면 여기에 작성

---

> **참고**: 이 파일은 자동 생성되었습니다. 내용을 수정하여 더 자세한 릴리즈 노트를 작성해주세요.
`;

// version 디렉토리 생성 (없을 경우)
const versionDir = "version";
if (!fs.existsSync(versionDir)) {
  fs.mkdirSync(versionDir);
}

// 릴리즈 노트 파일 생성
const releaseNoteFile = path.join(versionDir, `v${version}.md`);

// 파일이 이미 존재하지 않을 때만 생성
if (!fs.existsSync(releaseNoteFile)) {
  fs.writeFileSync(releaseNoteFile, releaseNoteTemplate);
  console.log(`✅ 릴리즈 노트 생성: ${releaseNoteFile}`);
  console.log(`📝 생성된 파일을 편집하여 릴리즈 노트를 완성해주세요.`);
} else {
  console.log(`⚠️  릴리즈 노트가 이미 존재합니다: ${releaseNoteFile}`);
}
