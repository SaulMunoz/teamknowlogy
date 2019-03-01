const dnaUtils = require('../../../shared/utils/dnaUtils');
const { matchinArray } = require('../../../shared/utils/dnaUtils');
const arrayDNA = require('../../../shared/utils/index');

test('Function defined', () => {

    expect(dnaUtils).toBeDefined();
});

test('Find mutation on DNA', () => {
    var dna = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
    var arrayMutation = arrayDNA(dna);    
    var expressionSearch = /(A{4,}|T{4,}|C{4,}|G{4,})/g;

    expect(dnaUtils(expressionSearch, arrayMutation)).toBe(true);
});


test('Not find mutation on DNA', () => {
    var dna = ["ATGCGA", "CAGTGC", "TTATTT", "AGACGG","GCGTCA", "TCACTG"];
    var arrayMutation = arrayDNA(dna);    
    var expressionSearch = /(A{4,}|T{4,}|C{4,}|G{4,})/g;

    expect(dnaUtils(expressionSearch, arrayMutation)).toBe(false);
});

test('Validate empty array dna', () => {
    var dna = [];
    var arrayMutation = arrayDNA(dna);    
    var expressionSearch = /(A{4,}|T{4,}|C{4,}|G{4,})/g;

    expect(dnaUtils(expressionSearch, arrayMutation)).toBe(false);
});
