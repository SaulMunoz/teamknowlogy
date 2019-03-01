const mongoose = require('mongoose');
const { Schema } = mongoose;

const DNAMutationSchema = new Schema({
    dna:[{type: String}],
    hasMutation: {type: Boolean, required: true}
});

module.exports = mongoose.model('DNAMutation', DNAMutationSchema);