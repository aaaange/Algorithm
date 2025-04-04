"""
- 분류 : 다이나믹 프로그래밍, 배낭 문제
- 성능 요약
    - 메모리 : 281576 KB
    - 시간 : 5232 ms
- 제출 일자 : 2025-04-04 17:25
"""

N, K = map(int, input().split())

bag = [list(map(int, input().split())) for _ in range(N)]
dp = [[0]*(K+1) for _ in range(N+1)]

for i in range(1,N+1):
    for j in range(1,K+1):
        if j >= bag[i-1][0]:
            dp[i][j] = max(bag[i-1][1]+dp[i-1][j-bag[i-1][0]],dp[i-1][j])
        else:
            dp[i][j] = dp[i-1][j]
print(dp[N][K])