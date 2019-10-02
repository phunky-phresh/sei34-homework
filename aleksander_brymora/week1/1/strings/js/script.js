const DrEvil = function (amount) {
    if (amount === 1000000) {
        return "1000000 dollars (pinky)";
    }
    else {
        return `${amount} dollars`;
    }
}

const mixUp = function (str1, str2) {
    const word1 = str2.slice(0, 2) + str1.slice(2);
    const word2 = str1.slice(0, 2) + str2.slice(2);
    const result = `${word1} ${word2}`;
    console.log(result);
    return result;
}

const fixStart = function (str) {
    const first = str.charAt(0);
    let newStr = first;
    for (let i = 1; i < str.length; i++) {
        if (str[i] === first) {
            newStr += "*";
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
}

const verbing = function (str) {
    if (str.length < 3) {
        return str;
    }
    else if (str.slice(-3) === "ing") {
        return (str + "ly");
    }
    else {
        return (str + "ing");
    }
}

const notBad = function (str) {
    const newStr = str.replace(/(not)(.*)(bad)/i, "good");
    console.log(newStr);
    return newStr;
}