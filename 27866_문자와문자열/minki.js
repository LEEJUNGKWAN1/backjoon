//문자와 문자열 - 문자열 입력

const input = require("fs")
  .readFileSync(
    "C:\\Users\\ghas3\\OneDrive\\Desktop\\슈퍼코딩2주차\\백준_시간복잡도_2\\input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const S = input[0];
const i = parseInt(input[1]);
console.log(S[i - 1]);

//단계별 풀이 순서
//1. 입력을 읽는다
//2. 첫 번째 줄에서 문자열 S를 저장한다
//3. 두 번재 줄에서 숫자 i를 정수로 읽는다
//4. S[i-1]에 접근해 문자를 출력한다.
//5. 왜? i-1 인가? JavaScript를 포함한 대부분의 프로그래밍 언어는 문자열 인덱스가 0부터 시작하기 때문
