Here is a TypeScript solution for the problem:

```typescript
class CoinChange {
    private coins: number[];
    private memo: Map<number, number>;

    constructor(coins: number[]) {
        this.coins = coins;
        this.memo = new Map<number, number>();
    }

    public getMinCoins(amount: number): number {
        if (amount < 0) {
            return -1;
        }
        if (amount === 0) {
            return 0;
        }
        if (this.memo.has(amount)) {
            return this.memo.get(amount)!;
        }
        let min = Number.MAX_VALUE;
        for (let coin of this.coins) {
            let res = this.getMinCoins(amount - coin);
            if (res >= 0 && res < min) {
                min = 1 + res;
            }
        }
        this.memo.set(amount, min === Number.MAX_VALUE ? -1 : min);
        return this.memo.get(amount)!;
    }
}

let coins = [1, 2, 5];
let coinChange = new CoinChange(coins);
console.log(coinChange.getMinCoins(11));
```

This TypeScript solution uses a class `CoinChange` to solve the problem. The class has a constructor that takes an array of coins as input and initializes a `Map` to store the minimum number of coins needed for each amount. The `getMinCoins` method is used to calculate the minimum number of coins needed for a given amount. It uses a recursive approach with memoization to avoid redundant calculations. The result is then printed to the console.