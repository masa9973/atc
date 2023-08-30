N = int(input())
l = []
l.append(list(map(int, input().split())))
ans = 0
for i in range(1, N):
    l.append(list(map(int, input().split())))
    for j in range(i):
        dx = l[i][0] - l[j][0]
        dy = l[i][1] - l[j][1]
        a = abs(dy / dx)
        if a <= 1:
            ans += 1
print(ans)
