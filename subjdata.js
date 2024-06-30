let data = {
    "math1" : {
        "name": "수학 Ⅰ",
        "count": 4,
        "examRate": 0.3,
        "time": 2,
        "isPF": false,
        "list": [
            {"value": 0, "rate": 0.3, "maxPoint": 100, "name": "1회고사(30%)"},
            {"value": 0, "rate": 0.3, "maxPoint": 100, "name": "2회고사(30%)"},
            {"value": 0, "rate": 1,   "maxPoint": 30,  "name": "문제해결"},
            {"value": 0, "rate": 1,   "maxPoint": 10,  "name": "수학적 의사소통"}
        ],
        "credit": 0
    },
    "math2" : {
        "name": "수학 Ⅱ",
        "count": 5,
        "examRate": 0.3,
        "time": 3,
        "isPF": false,
        "list": [
            {"value": 0, "rate": 0.3, "maxPoint": 100, "name": "1회고사(30%)"},
            {"value": 0, "rate": 0.3, "maxPoint": 100, "name": "2회고사(30%)"},
            {"value": 0, "rate": 1, "maxPoint": 10, "name": "수학문제만들기"},
            {"value": 0, "rate": 1, "maxPoint": 10, "name": "수학블로그만들기"},
            {"value": 0, "rate": 1, "maxPoint": 20, "name": "주제보고서작성"}
        ],
        "credit": 0
    },
    "phys" : {
        "name": "물리학 및 실험 Ⅰ",
        "count": 6,
        "examRate": 0.3,
        "time": 3,
        "isPF": false,
        "list": [
            {"value": 0, "rate": 0.3, "maxPoint": 100, "name": "1회고사(30%)"},
            {"value": 0, "rate": 0.3, "maxPoint": 100, "name": "2회고사(30%)"},
            {"value": 0, "rate": 1, "maxPoint": 10, "name": "실험보고서"},
            {"value": 0, "rate": 1, "maxPoint": 10, "name": "탐구보고서"},
            {"value": 0, "rate": 1, "maxPoint": 10, "name": "창의적 문제해결"},
            {"value": 0, "rate": 1, "maxPoint": 10, "name": "연습"}
        ],
        "credit": 0
    },
    "chem" : {
        "name": "화학 및 실험 Ⅰ",
        "count": 8,
        "examRate": 0.3,
        "time": 3,
        "isPF": false,
        "list": [
            {"value": 0, "rate": 0.3, "maxPoint": 100, "name": "1회고사(30%)"},
            {"value": 0, "rate": 0.3, "maxPoint": 100, "name": "2회고사(30%)"},
            {"value": 0, "rate": 1, "maxPoint": 10, "name": "퀴즈"},
            {"value": 0, "rate": 1, "maxPoint": 5, "name": "발표1"},
            {"value": 0, "rate": 1, "maxPoint": 5, "name": "발표2"},
            {"value": 0, "rate": 1, "maxPoint": 8, "name": "UV/Vis 기기 활용"},
            {"value": 0, "rate": 1, "maxPoint": 8, "name": "IR 기기 활용"},
            {"value": 0, "rate": 1, "maxPoint": 4, "name": "학습참여도"}
        ],
        "credit": 0
    },
    "life" : {
        "name": "생명과학 및 실험 Ⅰ",
        "count": 4,
        "examRate": 0.3,
        "time": 3,
        "isPF": false,
        "list": [
            {"value": 0, "rate": 0.3, "maxPoint": 100, "name": "1회고사(30%)"},
            {"value": 0, "rate": 0.3, "maxPoint": 100, "name": "2회고사(30%)"},
            {"value": 0, "rate": 1, "maxPoint": 20, "name": "실험1"},
            {"value": 0, "rate": 1, "maxPoint": 20, "name": "실험2"}
        ],
        "credit": 0
    },
    "earth" : {
        "name": "지구과학 및 실험 Ⅰ",
        "count": 4,
        "examRate": 0.3,
        "time": 3,
        "isPF": false,
        "list": [
            {"value": 0, "rate": 0.3, "maxPoint": 100, "name": "1회고사(30%)"},
            {"value": 0, "rate": 0.3, "maxPoint": 100, "name": "2회고사(30%)"},
            {"value": 0, "rate": 1, "maxPoint": 20, "name": "단열선도 작성 및 해석"},
            {"value": 0, "rate": 1, "maxPoint": 20, "name": "천체망원경 실습"}
        ],
        "credit": 0
    },
    "info" : {
        "name": "정보과학개론",
        "count": 6,
        "examRate": 0.25,
        "time": 3,
        "isPF": false,
        "list": [
            {"value": 0, "rate": 0.25, "maxPoint": 100, "name": "1회고사(25%)"},
            {"value": 0, "rate": 0.25, "maxPoint": 100, "name": "2회고사(25%)"},
            {"value": 0, "rate": 1, "maxPoint": 10, "name": "학습활동"},
            {"value": 0, "rate": 1, "maxPoint": 10, "name": "보고서"},
            {"value": 0, "rate": 1, "maxPoint": 15, "name": "연습문제"},
            {"value": 0, "rate": 1, "maxPoint": 15, "name": "퀴즈"}
        ],
        "credit": 0
    },
    "hist" : {
        "name": "한국사 Ⅰ",
        "count": 5,
        "examRate": 0.35,
        "time": 2,
        "isPF": false,
        "list": [
            {"value": 0, "rate": 0.35, "maxPoint": 100, "name": "2회고사(35%)"},
            {"value": 0, "rate": 1, "maxPoint": 20, "name": "한국사 주제별 발표"},
            {"value": 0, "rate": 1, "maxPoint": 10, "name": "발표자료 제작"},
            {"value": 0, "rate": 1, "maxPoint": 20, "name": "역사 탐구보고서"},
            {"value": 0, "rate": 1, "maxPoint": 15, "name": "역사 포트폴리오"}
        ],
        "credit": 0
    },
    "eng" : {
        "name": "영어 Ⅰ",
        "count": 5,
        "examRate": 0.4,
        "time": 3,
        "isPF": false,
        "list": [
            {"value": 0, "rate": 0.4, "maxPoint": 100, "name": "2회고사(40%)"},
            {"value": 0, "rate": 1, "maxPoint": 15, "name": "Task Portfolio"},
            {"value": 0, "rate": 1, "maxPoint": 20, "name": "Dictogloss"},
            {"value": 0, "rate": 1, "maxPoint": 10, "name": "Interview"},
            {"value": 0, "rate": 1, "maxPoint": 15, "name": "Writing"}
        ],
        "credit": 0
    },
    "kor" : {
        "name": "국어 Ⅰ",
        "count": 4,
        "examRate": 0,
        "time": 3,
        "isPF": false,
        "list": [
            {"value": 0, "rate": 1, "maxPoint": 30, "name": "우리글 바로 쓰기"},
            {"value": 0, "rate": 1, "maxPoint": 35, "name": "생활글 쓰기"},
            {"value": 0, "rate": 1, "maxPoint": 15, "name": "발표"},
            {"value": 0, "rate": 1, "maxPoint": 20, "name": "주제 통합 읽기"}
        ],
        "credit": 0
    },
    "music" : {
        "name": "음악",
        "count": 3,
        "examRate": 0,
        "time": 2,
        "isPF": false,
        "list": [
            {"value": 0, "rate": 1, "maxPoint": 35, "name": "노래 부르기"},
            {"value": 0, "rate": 1, "maxPoint": 30, "name": "악기 연주하기"},
            {"value": 0, "rate": 1, "maxPoint": 35, "name": "소리 창작하기"}
        ],
        "credit": 0
    },
    "pe" : {
        "name": "체육 Ⅰ",
        "count": 4,
        "examRate": 0,
        "time": 1,
        "isPF": true,
        "list": [
            {"value": 0, "rate": 1, "maxPoint": 20, "name": "건강영역"},
            {"value": 0, "rate": 1, "maxPoint": 30, "name": "경쟁영역(경기1)"},
            {"value": 0, "rate": 1, "maxPoint": 30, "name": "경쟁영역(경기1)"},
            {"value": 0, "rate": 1, "maxPoint": 20, "name": "스포츠맨십(참여도)"}
        ],
        "credit": 0
    }
};