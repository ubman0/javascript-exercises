const palindromes = function (x) {
    const punctuation = ["!", "?", ",", "."];
    x = x.toLowerCase().replace(/[^a-z]/g, "");
    return x.split("").reverse().join("") == x;
};

// Do not edit below this line
module.exports = palindromes;
