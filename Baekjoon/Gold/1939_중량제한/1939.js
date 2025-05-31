`
- 분류 : 자료구조, 그래프 이론, 그래프 탐색, 이분 탐색, 너비 우선 탐색, 최단 경로, 데이크스트라, 분리 집합
- 성능 요약
    - 메모리 : 59308 KB
    - 시간 : 480 ms
- 제출 일자 : 2025-05-30 17:19
`

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin, // 터미널에서 입력 받기
  output: process.stdout // 터미널에 출력하기
});

let input = [];
rl.on('line', line => {
  input.push(line.trim()); // 한 줄씩 입력 받을 때 앞뒤 공백 제거
}).on('close', () => { // 입력이 끝나면 아래 실행
  const [N, M] = input[0].split(' ').map(Number); // N 섬 개수, M 다리 개수
  const graph = [];

  for (let i = 1; i <= M; i++) {
    const [a, b, c] = input[i].split(' ').map(Number);
    graph.push([c, a, b]);
  }

  const [start, end] = input[M + 1].split(' ').map(Number);

  // 부모 노드 배열 초기화
  const par = Array.from({ length: N + 1 }, (_, i) => i);

  // 대표 노드 찾기
  function find(x) {
    if (par[x] === x) return x;
    par[x] = find(par[x]);  // 경로 압축
    return par[x];
  }

  // union
  function union(a, b) {
    a = find(a);
    b = find(b);
    par[Math.max(a, b)] = Math.min(a, b);  // 병합
  }

  // 같은 집합인지 확인
  function check(a, b) {
    return find(a) === find(b);
  }

  // 중량 기준 내림차순 정렬
  graph.sort((a, b) => b[0] - a[0]);

  // 다리 연결 + 연결 확인
  for (const [c, a, b] of graph) {
    union(a, b);
    if (check(start, end)) {
      console.log(c);
      break;
    }
  }
});
