const DNAMutation = require('../models/dnamutation');
const arrayDNA = require('../shared/utils/index');
const dnaUtils = require('../shared/utils/dnaUtils');

const dnaController = {};

dnaController.hasMutation = async (req, res) => {

    //var dna = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA','TCACTG'];
    const dnaMutation = new DNAMutation(req.body);
    
    
    var arrayMutation = arrayDNA(dnaMutation.dna);
    var expressionSearch = /(A{4,}|T{4,}|C{4,}|G{4,})/g;

    console.log("dnaMutation.dna", dnaMutation.dna);    
    console.log("arrayMutation", arrayMutation);

    dnaMutation.hasMutation = dnaUtils(expressionSearch, arrayMutation);
    console.log(dnaMutation.hasMutation);

    await dnaMutation.save();

    if (dnaMutation.hasMutation) {
        res.json({
            status: "Mutation found"
        });
    }
    else
    {
        res.status(403).json({
            status: "Mutation not found"
        });
    }
    
}

module.exports = dnaController;