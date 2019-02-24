// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var coins = [
        { name: 'H', value: 50, count: 0 },
        { name: 'Q', value: 25, count: 0 },
        { name: 'D', value: 10, count: 0 },
        { name: 'N', value: 5, count: 0 },
        { name: 'P', value: 1, count: 0 },
    ];

    if (currency > 10000) {

        return { error: "You are rich, my friend! We don't have so much coins for exchange" }

    } else {

        let index = 0;
        var result = {};
        while (currency > 0) {
            coins[index].count = Math.trunc(currency / coins[index].value);
            currency -= coins[index].value * coins[index].count;
            if (coins[index].count != 0) {
                result[coins[index].name] = coins[index].count;
            }
            index++;
        };
        return result
    }
}
