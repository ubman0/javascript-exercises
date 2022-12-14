const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    if (number === 0) return 0;
    total = 1;
    beforeTotal = 0;
    for (let i = 1; i < number; i++){
        const temp = total;
        total = beforeTotal + total;
        beforeTotal = temp;
    }
    return total;
};


// Do not edit below this line
module.exports = fibonacci;
