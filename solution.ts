class CoinChange {
    private coins: number[];
    private memo: Map<number, number>;

    constructor(coins: number[]) {
        this.coins = coins;
        this.memo = new Map<number, number>();
    }
}