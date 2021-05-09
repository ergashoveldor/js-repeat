function sum(discount, ...prices) {
    let total = prices.reduce((a, b) => a+b);
    return total * (1-discount)
}

console.log(sum(0.1, 20, 30));