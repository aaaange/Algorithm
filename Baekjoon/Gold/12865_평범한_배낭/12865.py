N, K = map(int, input().split())

items_list = [0]*N

for i in range(N):
    items_list[i] = list(map(int, input().split()))

max_v = 0
# current_v = 0
# max_w = K

items_list.sort(key=lambda x:-x[1])
# print(items_list)

for idx in range(N):
    current_v = 0
    max_w = K
    for i in range(idx,N):
        if max_w >= items_list[i][0]:
            current_v += items_list[i][1]
            max_w -= items_list[i][0]
        else:
            pass
    max_v = max(current_v, max_v)


print(max_v)