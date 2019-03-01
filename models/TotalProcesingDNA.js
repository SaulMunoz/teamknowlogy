const mongoose = require('mongoose');
const { Schema } = mongoose;

const TotalProcesingDNASchema = new Schema({
    totalMutation:{type: Number, required: true},
    totalNoMutations: {type: Number, required: true}
});

module.exports = mongoose.model('TotalProcesingDNA', TotalProcesingDNASchema);