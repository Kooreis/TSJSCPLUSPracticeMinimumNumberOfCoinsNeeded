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