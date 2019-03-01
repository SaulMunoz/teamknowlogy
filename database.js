
const mongoose = require('mongoose');

const URI_DB_LOCAL = 'mongodb://localhost:27017/teamknowlogy';

const URI_DB_SERVER = "mongodb://smunozteamknow:<PASSWORD>@cluster0-shard-00-00-qbjpv.mongodb.net:27017,cluster0-shard-00-01-qbjpv.mongodb.net:27017,cluster0-shard-00-02-qbjpv.mongodb.net:27017/teamknowlogy?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

mongoose.connect(URI_DB_SERVER).then((db) => {
    console.log("db Inicializada");
}).catch(err => console.error(err));

module.exports = mongoose;
