# DNA Mutations seeker NXN

[![Build Status](https://travis-ci.org/teamknowlogy.svg?branch=master)](https://travis-ci.org/teamknowlogy/)

Test for dna matrix and stats of comparison.

  - mutations: Calculate matrix and search mutations
  - stats: Get the statistics of DNA seeker

### Tech

DNA Mutation seeker uses a number of open source projects to work properly:

* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [jQuery] - duh


### Installation

DNA Mutation Seeker requires [Node.js](https://nodejs.org/) v4+ to run.

Download repo and Install the dependencies and devDependencies and start the server.

```sh
$ cd mutations
$ npm install
$ npm run dev
```

## Unit Test

Open a shell command and position in node js folder

### Run Test

to run test default configuration (--coverage)
```
npm test
```

#### Building for production
For production release:
```sh
$ npm build --prod
```
## API

### Api Methods

#### Mutation
Sending sequence of DNA by HTTP POST with a JSON with the next format:
```sh
POST → /mutation/
{
“dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}
```
in case api verifies mutation, the operation returns HTTP 200-OK, in case api dont't verifies mutation returns 403-Forbidden

#### stats
Sending sequence of DNA by HTTP POST with a JSON with the next format:
```sh
GET → /stats/
```
```sh
Response → 

{
    "count_mutations": 2,
    "count_no_mutation": 0,
    "ratio": 2
}

```

in case api verifies mutation, the operation returns HTTP 200-OK, in case api dont't verifies mutation returns 403-Forbidden

POST → /mutation/
{
“dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}
### Todos

 - Add security to access api
 - Logger airbreak.io as test
License
----

GNU