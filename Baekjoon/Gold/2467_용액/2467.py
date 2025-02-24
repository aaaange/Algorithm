N = int(input()) # 전체 용액의 수
arr = list(map(int, input().split()))
re_arr = sorted(arr, reverse=True)

min_value = re_arr[0]
min_list = []
current_value = 0

for i in range(N//2+1):
    current_value = arr[i] + re_arr[i]
    if min_value > abs(current_value):
        min_value = current_value
        min_list = [arr[i], re_arr[i]]

print(min_list)
