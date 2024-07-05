var express = require('express');
var router = express.Router();
var fs = require("fs");

//library 
var { convert } = require('../lib/function')


//creator 
let creator = '@asakura';

let PromiseRes = (hasil) => {
  return { creator: creator, status: 200, result: hasil }
}

//==================================all==================================\\


//==================================end==================================\\

module.exports = router
