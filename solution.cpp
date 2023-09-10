```cpp
#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int minCoins(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        for (int j = 0; j < coins.size(); j++) {
            if (coins[j] <= i) {
                dp[i] = min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}

int main() {
    vector<int> coins = {1, 2, 5};
    int amount;
    cout << "Enter the amount: ";
    cin >> amount;
    int result = minCoins(coins, amount);
    if (result != -1) {
        cout << "Minimum number of coins needed: " << result << endl;
    } else {
        cout << "Amount cannot be made up by given coins" << endl;
    }
    return 0;
}
```