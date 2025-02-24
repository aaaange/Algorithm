N = int(input()) # 전체 용액의 수
arr = list(map(int, input().split()))

min_value = float("inf")
min_list = []
current_value = 0

i = 0
j = N-1
while i <= (N//2+1) and j >= (N//2-1) and arr[i] != arr[j]:
    current_value = arr[i] + arr[j]
    if min_value > abs(current_value):
        min_value = abs(current_value)
        min_list = [arr[i], arr[j]]
    else:
        break
    if 0 < current_value:
        j -= 1
    elif 0 > current_value:
        i += 1
        

print(min_list)
