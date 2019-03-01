/**
 * Function to find pattern expression in string array
 */
module.exports = function (expresion, arrayDNA) {

    if (arrayDNA && arrayDNA.length > 0) {
        const arrayCombinationsDNA = arrayDNA.slice();
        var wordLength = 0;
        console.log('arrayCombinationsDNA', arrayCombinationsDNA.length);

        if (matchInArrayToString(expresion, arrayDNA)) {
            console.log("Si Match", true);
            return true;
        } else {
            console.log("No Match", false);
            return false;
        }
    }
    else
    {
        return false;
    }

};


/**
 * Search pattern on elements of array
 * 03/01/2019 
 * @param {*} string 
 * @param {*} expressions 
 */
function matchInArray(patternMatch, arrayCombinations) {
    
    var len = arrayCombinations.length,
        i = 0;

    for (; i < len; i++) {
        if (arrayCombinations[i].match(patternMatch)) {
            console.log("Si entró");
            return true;
        }
    }

    return false;

}

/**
 * join array in string without commmas, so pattern search only once
 * 03/01/2019 
 * @param {*} string 
 * @param {*} expressions 
 */
function matchInArrayToString(patternMatch, arrayCombinations) {

    
    var len = arrayCombinations.length,
        i = 0;
    var stringCombinations = arrayCombinations.join("");

    if (stringCombinations.match(patternMatch)) {
        console.log("Si entró");
        return true;
    }
    
    return false;

}