`
- 분류 : 구현, 문자열
- 성능 요약
    - 메모리 : 9340 KB
    - 시간 : 92 ms
- 제출 일자 : 2025-02-24 08:58
`

const fs = require("fs"); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("input.txt").toString().trim().split("\n");

const N = parseInt(input[0])
const count = {};  // 각 성의 첫 글자 빈도를 저장할 객체

for (let i = 1; i <= N; i++) {
    const firstLetter = input[i][0]; // 성의 첫 글자만 가져오기
    count[firstLetter] = (count[firstLetter] || 0) + 1;
}

// 5명 이상인 첫 글자만 필터링 후 정렬
const result = Object.keys(count)
    .filter(letter => count[letter] >= 5)
    .sort()
    .join("");  // 문자열로 변환

console.log(result.length > 0 ? result : "PREDAJA");