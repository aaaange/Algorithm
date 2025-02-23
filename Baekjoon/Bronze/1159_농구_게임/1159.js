`
- 분류 : 구현, 문자열
- 성능 요약
    - 메모리 :  KB
    - 시간 :  ms
- 제출 일자 : 2025-02-24 08:56
`

const fs = require("fs"); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = parseInt(input[0])

const member = []

for (let i = 1; i < N + 1 ; i ++) {
    // member.add(input[i]) // add는 배열(Array)의 메서드가 아닌 set의 메서드
    member.push(input[i])
}

console.log(member)