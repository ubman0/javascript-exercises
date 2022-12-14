const palindromes = function (x) {
    x.toLowerCase();
    const punctuation = ["!", "?", " "];
    x.replace(punctuation, "")
    return x.split("").reverse().join("") == x;
};

// Do not edit below this line
module.exports = palindromes;
