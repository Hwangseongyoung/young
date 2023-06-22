// 타입스크립트에서의 오류

// 구문 오류 : 타입스크립트가 자바스크립트로 변환되는 것을 차단한 경우
// 타입 오류 : 타입 검사기에 따라 일치하지 않는 것이 감지된 경우

//! 구문오류
// 타입스크립트가 코드로 이해할 수 없는 잘못된 구문을 감지할 때 발생
// 이는 타입스크립트가 타입스크립트 파일에서 자바스크립트 파일을 올바르게 생성할 수 없도록 차단

// let let error;

//! 타입오류
// 타입 오류는 타입스크립트의 타입 검사기가 프로그램의 타입에서 오류를 감지했을 때 발생
// 오류가 발생해도 타입스크립트 구문이 자바스크립트로 변환되는 것을 차단하지는 X
// 구문상 유효하지만 타입스크립트는 코드가 실행될 때 충돌할 가능성이 있음을 감지

// console.blub("A"); // 'blub' 속성이 'Console' 형식에 없습니다.

// tsconfing.json 파일에서 이러한 구문오류와 타입오류를 읽도록 설정