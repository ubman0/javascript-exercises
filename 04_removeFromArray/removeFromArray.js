const removeFromArray = function(args, vallue) {
    const array = args[0];
    return array.filter(val => !array.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
