const sumAll = function(lower, upper) {
    if ((lower || upper) < 0){
        return "ERROR";
    }
    if (!Number.isInteger(lower) || !Number.isInteger(upper)){
        return "ERROR";
    }
    if (lower > upper){
        let temp = upper;
        upper = lower;
        lower = temp;
    }
    let total = 0;
    for (let i = lower; i < upper + 1; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;