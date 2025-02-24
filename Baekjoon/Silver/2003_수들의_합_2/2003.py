N, M = map(int, input().split())
array = list(map(int, input().split()))

count = 0

for i in range(N):
    num = 0
    idx = 0
    while num < M:
        if (i + idx) >= N:
            break
        num += array[i + idx]
        if num == M:
            count += 1
            break
        else:
            idx += 1

print(count)