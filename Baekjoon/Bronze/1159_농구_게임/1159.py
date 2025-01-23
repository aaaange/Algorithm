"""
- 분류 : 구현 문자열열
- 성능 요약
    - 메모리 : 32412 KB
    - 시간 : 36 ms
- 제출 일자 : 2025-01-23 12:57
"""

N = int(input())

member = []
for i in range(N):
    member.append(input())

member.sort()

count = 1
first = ""
result = ""

for idx in range(N):
    if idx == 0:
        first = member[idx][0]
    else:
        if first == member[idx][0]:
            count += 1
        else:
            if count >= 5:
                result += first
            count = 1
            first = member[idx][0]

if count >= 5:
    result += first

if result == "":
    print("PREDAJA")
else:
    print(result)