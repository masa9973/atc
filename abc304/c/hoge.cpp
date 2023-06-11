#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int main() {
	int n, d;
	cin >> n >> d;
	vector<int> x(n), y(n);
	for (int i = 0; i < n; i++) cin >> x[i] >> y[i];
	vector<vector<bool>> graph(n, vector<bool>(n));
	for (int i = 0; i < n; i++) for (int j = 0; j < n; j++) if ((x[i] - x[j]) * (x[i] - x[j]) + (y[i] - y[j]) * (y[i] - y[j]) <= d * d) graph[i][j] = true;
	vector<bool> ans(n);
	ans[0] = true;
	queue<int> que; que.push(0);
	while (!que.empty()) {
		int q = que.front(); que.pop();
		for (int i = 0; i < n; i++) {
			if (graph[q][i] && !ans[i]) {
				ans[i] = true;
				que.push(i);
			}
		}
	}
	for (int i = 0; i < n; i++) cout << (ans[i] ? "Yes" : "No") << '\n';
}