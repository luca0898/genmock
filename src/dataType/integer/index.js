module.exports = function ({ min, max, fix, fractionDigits  }) {
    let result = fix ? fix : Math.random() * (max - min) + min;
    return parseFloat(result.toFixed(fractionDigits || 0), 10);
}