export const projects = [
  {
    id: 1,
    title: "Study Learners",
    description:
      "스터디 시간 관리 및 실시간 단체 스터디룸 제공 웹 애플리케이션",
    imageUrl: "/SYJs-Portfolio/favicon.png",
    targetUser: "스터디 시간을 관리해야 하는 학생이나 취업, 시험 준비생",
    valueProposition:
      "온라인 스터디룸을 통해 실제 공부 시간을 측정하고 통계화하여 공부 시간 관리의 효율성을 높임",
    coreFeatures:
      "스터디 일정 관리, 실시간 온라인 스터디룸, 스터디 시간 통계 및 순위 페이지 제공",
    role: {
      fe: "실시간 스터디룸 입장, socket 연결, 타이머 구현 및 socket message error 처리",
      be: "스터디 일정 관리 페이지 할 일 CRUD API 구현, 전체적인 DB 구조 설계",
    },
    technologies: {
      frontend:
        "React(vite), Typescript, zustand, styled-component, Axios, Socket.io, recharts, Cookie",
      backend: "Nest.js, Socket.io, Cookie, mongoose",
      dbInfra: "MongoDB, AWS EC2 & S3, Docker, nginx, vercel",
    },
    implementationDetails: "",
    problemSolving: "",
    deploymentUrl: "https://study-room-fe-ii0122.vercel.app/",
    githubUrl: [
      "https://github.com/ii-0122/study-room-FE",
      "https://github.com/Programmers-3th-Team-Kim/study-room-BE",
    ],
  },
  {
    id: 2,
    title: "SMART DAY",
    description: "일정 관리를 위한 캘린더 및 메모 기능 제공 웹 사이트",
    imageUrl: "/SYJs-Portfolio/calmemo.png",
    targetUser: "",
    valueProposition: "",
    coreFeatures: "",
    role: {
      fe: "",
      be: "",
    },
    technologies: {
      frontend: "",
      backend: "",
      dbInfra: "",
    },
    implementationDetails: "",
    problemSolving: "",
    deploymentUrl: "",
    githubUrl: ["https://github.com/Team-WS-Project/smart-day"],
  },
  {
    id: 3,
    title: "my_game_web",
    description: "여러 미니게임과 미니게임 결과 순위를 제공하는 웹 사이트",
    imageUrl: "/SYJs-Portfolio/mygameweb.png",
    targetUser: "",
    valueProposition: "",
    coreFeatures: "",
    role: {
      fe: "",
      be: "",
    },
    technologies: {
      frontend: "",
      backend: "",
      dbInfra: "",
    },
    implementationDetails: "",
    problemSolving: "",
    deploymentUrl: "",
    githubUrl: ["https://github.com/ii-0122/homepage"],
  },
  {
    id: 4,
    title: "Medi-Search",
    description:
      "의약품 정보 검색 기능 및 캘린더 & 메모 탭을 제공하는 안드로이드 애플리케이션",
    imageUrl: "/SYJs-Portfolio/mediSearch.png",
    targetUser: "",
    valueProposition: "",
    coreFeatures: "",
    role: {
      fe: "UI / UX 디자인",
      be: "DB 서버 & 오픈 API 연동, 서버 구현",
    },
    technologies: {
      frontend: "Kotlin",
      backend: "Kotlin, Gson, OkHttp, Retrofit2",
      dbInfra: "Android Studio, figma",
    },
    implementationDetails: "",
    problemSolving: "",
    deploymentUrl: "",
    githubUrl: ["https://github.com/ii-0122/medi_search_app"],
  },
];
