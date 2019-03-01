/**
 * Function to find pattern expression in string array
 */
module.exports = function (expresion, arrayDNA) {

    if (arrayDNA && arrayDNA.length > 0) {
        const arrayCombinationsDNA = arrayDNA.slice();
        var wordLength = 0;
        console.log('arrayCombinationsDNA', arrayCombinationsDNA.length);

        if (matchInArray(expresion, arrayDNA)) {
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
 * 
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