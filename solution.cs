Here is a JavaScript solution for the problem:

```javascript
function minCoins(coins, m, V) {
    if (V == 0) return 0;
    let res = Number.MAX_VALUE;
    for (let i = 0; i < m; i++) {
        if (coins[i] <= V) {
            let sub_res = minCoins(coins, m, V - coins[i]);
            if (sub_res != Number.MAX_VALUE && sub_res + 1 < res)
                res = sub_res + 1;
        }
    }
    return res;
}

function findMinCoins() {
    let coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
    let m = coins.length;
    let V = 93;
    console.log("Minimum coins required is ", minCoins(coins, m, V));
}

findMinCoins();
```

This console application will determine the minimum number of coins needed to make a given amount. The given amount in this case is 93 and the available coins are 1, 2, 5, 10, 20, 50, 100, 500, 1000. The function `minCoins` is a recursive function that calculates the minimum number of coins needed to make a given amount. The function `findMinCoins` is the main function that calls the `minCoins` function and prints the result to the console.