# 💬 DevTalk - 개발자 커뮤니티 플랫폼
<img src="https://github.com/user-attachments/assets/c1f078b0-45e8-4ccc-a8f0-95834fbd4de9" alt="DevTalk 로고" width="300"/>

> **카카오테크 부트캠프 판교 2기 - 개인 프로젝트**

> **개발자를 위한 소통 플랫폼**
> *혼자 끙끙 앓지 말고, 함께 나누고 성장하세요.*
> *지식은 공유될 때 더 빛이 납니다.*

---

## 📌 프로젝트 개요

**DevTalk**는 개발자들이 **진짜 필요한 소통**을 할 수 있는 커뮤니티 플랫폼입니다.  

현재 개발 생태계는 빠르게 변화하고 있지만, 개발자들이 마음 편히 질문하고 경험을 나눌 수 있는 공간은 부족합니다.  
기존의 개발 커뮤니티들은 너무 형식적이거나, 초보자에게는 진입장벽이 높고, 실무진에게는 깊이가 부족한 경우가 많습니다.

DevTalk은 이런 문제의식에서 출발했습니다:

- **"이런 상황, 다른 사람들은 어떻게 했을까?"** - 혼자만의 고민에서 벗어나고 싶은 개발자들
- **"내 개발 과정을 누군가와 나누고 싶은데..."** - 성장 여정을 함께할 동료가 그리운 순간들  
- **"이 문제, 말로는 설명이 어려운데..."** - 복잡한 상황을 시각적으로 보여주고 싶을 때
- **"진짜 현실적인 조언이 듣고 싶어요"** - 이론이 아닌 경험담이 필요한 순간들

**DevTalk**에서 개발자들은 단순히 질문하고 답하는 것을 넘어서, **사진과 진솔한 이야기로 실제 경험을 바탕으로 한 깊이 있는 소통**을 나눌 수 있습니다.

개발 과정의 생생한 순간들을 이미지로 공유하고, 댓글을 통해 같은 고민을 했던 개발자들과 연결되며, 서로의 경험담을 나누는 **개발자를 위한, 개발자에 의한 진짜 소통 공간**입니다.

혼자서는 막막했던 개발 여정이 **함께라면 더 즐거운 성장**이 될 수 있도록, DevTalk가 여러분의 든든한 개발 동반자가 되겠습니다.

---

[![Java](https://img.shields.io/badge/Java-21-orange.svg)](https://adoptopenjdk.net/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.2-brightgreen.svg)](https://spring.io/projects/spring-boot)

## 관련 블로그 글

1. [<개인 프로젝트> HTML을 재사용 가능하게 만들기](https://aole.tistory.com/52)

2. [웹 개발 - HTML부터 REST API까지](https://aole.tistory.com/55)

3. [ERD 설계 - NULL과 정규화 사이의 고민들](https://aole.tistory.com/61)
 
4. [프로젝트 회고 - 멘토링 피드백을 통한 성장 과정](https://aole.tistory.com/83)


## 📖 프로젝트 개요

- **서비스 설명**: IT 개발자들에게 소통 공간을 제공하는 커뮤니티 서비스
- **개발 기간**: 2025.03 ~ 2025.03 (1개월)
- **개발 인원**: 1명 (풀스택)
- **담당 역할**: 풀스택 개발

## 🧩 “신문 읽듯이 HTML 짜기” – includeHTML

로버트 마틴의 **“코드는 신문처럼 읽혀야 한다”**는 원칙을 HTML에도 적용하고자,
Thymeleaf fragment처럼 동작하는 include-html 속성과 includeHTML 함수를 직접 구현했습니다.

<header include-html="./layout/header/header.html"></header>
<div include-html="./layout/login-container.html"></div>

<script>
  includeHTML(function () {
    import("./js/common.js");
    import("./js/login.js");
  });
</script>


페이지 상단에서는 레이아웃만 한눈에 보이게 유지

실제 세부 구조는 layout/*.html로 분리 → 가독성 & 재사용성 향상

HTML include 완료 후 콜백에서 JS 로드 → DOM 의존성 문제 해결

자세한 과정은 블로그에 정리했습니다.

🔗 https://aole.tistory.com/52

## 📚 백엔드(메인 리포지토리) 링크

- **백엔드(메인 리포지토리)**: https://github.com/100-hours-a-week/2-jelly-song-community-FE
