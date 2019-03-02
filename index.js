const express = require('express');
const morgan = require('morgan');
const cors  = require ('cors');

const app = express();
const subpath = express();

var argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const { mongoose } = require('./database');
const swagger = require('swagger-node-express');
const bodyParser= require('body-parser');
const redis = require('redis');

// const swaggerDocument = require('./swagger.json');

// Settings process.Env.PORT
app.set('port', process.env.PORT || 4100);
app.set('portRedis', process.env.PORT || 17401);
app.set('hostRedis', 'redis-17401.c85.us-east-1-2.ec2.cloud.redislabs.com');

const redisPassword = "HPiUxfAVuQbPTDyAUkVByiarnaFkPpEn" ; 
const client = redis.createClient({
          port: app.get('portRedis'),
          host : app.get('hostRedis'),  
          no_ready_check: true,
          auth_pass: redisPassword,                                                                                                                                                           
});       

// var client = redis.createClient(app.get('portRedis'), app.get('hostRedis'));

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4210'}));
// app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));
/* Swagger Config */
app.use("/v1", subpath);
swagger.setAppHandler(subpath);

swagger.setApiInfo({
    title: "Mutations DNA API Definition",
    description: "API to do validations of DNA Chains (NXN) Array and get stats ratio",
    termsOfServiceUrl: "",
    contact: "saul.munoz@gmail.com",
    license: "GNU",
    licenseUrl: "GNU"
});


//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
const dnaMutationsRoutes = require('./routes/dnamutations.routes');
const dnaStatisticsRoutes = require('./routes/statistics.routes');

app.use('/mutation/', dnaMutationsRoutes);
app.use('/stats/', dnaStatisticsRoutes);

app.use(express.static('dist'));


subpath.get('/', function (req, res) {
    res.sendfile(__dirname + '/dist/index.html');
});

swagger.configureSwaggerPaths('', 'api-docs', '');

var domain = 'localhost';
if(argv.domain !== undefined)
    domain = argv.domain;
else
    console.log('No --domain=xxx specified, taking default hostname "localhost".');
var applicationUrl = 'http://' + domain;
swagger.configure(applicationUrl, '1.0.0');

//Static files
app.use(express.static(path.join(__dirname,'public')));

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

//Starting server at Port
app.listen(app.get('port'), () => {
    // mongoose
    console.log("Servidor inicializado en node");
});