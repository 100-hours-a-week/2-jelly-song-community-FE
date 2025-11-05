# 💬 DevTalk - FE

## 🧩 "신문 읽듯이 HTML 짜기" – includeHTML

로버트 마틴의 **"코드는 신문처럼 읽혀야 한다"**는 원칙을 HTML에도 적용하고자,  
Thymeleaf fragment처럼 동작하는 `include-html` 속성과 `includeHTML` 함수를 직접 구현했습니다.

```html



  includeHTML(function () {
    let script = document.createElement("script");
    script.src = "./js/login.js";
    script.type = "module";
    document.body.appendChild(script);
  });

```

### 📌 도입 배경
- 템플릿 엔진 사용이 제한된 상황에서 코드의 가독성과 재사용성이 저하됨
- 로버트 마틴의 클린코드 원칙인 "신문 읽듯이 코드를 작성해야 한다"는 개념을 HTML에 적용하기로 결정
- CSS 라이브러리 BootStrap과 Spring의 Thymeleaf 기능을 순수 JavaScript로 구현하여 HTML의 추상화 수준을 높이고자 함

### 🔧 트러블 슈팅

**1) HTML 컴포넌트 분리 전략 수립**
- 기존 하나의 HTML 파일에 모든 코드가 혼재된 구조
- header, main-container, footer 등으로 분리하여 독립적인 HTML 파일 단위로 관리

**2) includeHTML 함수 개발**
- `include-html` 속성을 가진 태그를 탐지
- `fetch()`를 이용해 지정된 경로의 HTML을 동적으로 로드하는 라이브러리 구현  
  → 편리한 컴포넌트 재사용

**3) 비동기 로딩 문제 해결**
- HTML 로드 이후 JavaScript가 실행되어야 하는 의존성 문제 발생
- **해결방안**: 콜백 패턴 적용
  - `includeHTML()` 완료 후 콜백에서 동적으로 `<script>`를 추가
  - DOM 조작 코드가 정상적으로 실행되도록 보장

### ✨ 성과
1. 단일 HTML 파일을 컴포넌트 단위로 분리하여 코드 가독성 향상, 중복 감소
2. `"include-html"` 속성 한 줄로 여러 컴포넌트 삽입 가능
3. 클린코드 원칙을 HTML에 적용한 새로운 접근법 창안

### 📝 관련 블로그 링크
🔗 [<개인 프로젝트> HTML을 재사용 가능하게 만들기](https://aole.tistory.com/52)

---

## 📚 백엔드(메인 리포지토리) 링크
- **백엔드(메인 리포지토리)**: https://github.com/100-hours-a-week/2-jelly-song-community
