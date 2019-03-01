const DNAMutation = require('../models/dnamutation');
const arrayDNA = require('../shared/utils/index');
const dnaUtils = require('../shared/utils/dnaUtils');

const statisticsController = {};


statisticsController.getStatistics = async (req, res) => {
    
    DNAMutation.countDocuments({hasMutation: true}).exec((err, count) => {
        if (err) {
            console.log("err", err);
            res.send(err);
            return;
        }

       //Also we can get the general countDocument and  minus hasMutations, the difference are the DNA without mutations

       //Method 2 Find by hasMutation = false
        DNAMutation.countDocuments({hasMutation: false}).exec((err, countNotMutation) => {
            var ratio = 0;
            if (err) {
                console.log("err", err);
                res.send(err);
                return;
            }
            if (countNotMutation > 0)
            {
                ratio = count / countNotMutation;
            }
            else
            {
                ratio = count;
            }

            console.log("countNotMutations", countNotMutation);
        
            res.json({"count_mutations": count, "count_no_mutation": countNotMutation, "ratio": ratio});
        });
        
    });
}

module.exports = statisticsController;