/**
 * 
 */
module.exports = function(arrayDNA) {
    var wordLength = 0; 
    let arrayCombinationsDNA = [];

    if (arrayDNA && arrayDNA.length > 0)
    {
        arrayCombinationsDNA = arrayDNA.slice();
        
        //Get legth of words in ite array
        wordLength = arrayCombinationsDNA[0].length;
    
        for(countArray = 0; countArray <= wordLength -1; countArray++)
        {
            const arrayVertical = arrayDNA.reduce((accumulator, dnaChain) => accumulator + dnaChain[countArray], '');

            arrayCombinationsDNA.push(arrayVertical);
        }

        const arraySlash = arrayDNA.reduce(function(accumulator, dnaChain, currentIndex, array) {
            return accumulator + dnaChain[currentIndex];
          }, '');
        
          
        arrayCombinationsDNA.push(arraySlash);

        const arraySlashInverse = arrayDNA.reverse().reduce(function(accumulator, dnaChain, currentIndex, array) {
            return accumulator + dnaChain[currentIndex];
          }, '');

        arrayCombinationsDNA.push(arraySlashInverse);


        return arrayCombinationsDNA;

    }

    return arrayCombinationsDNA;
    
};
