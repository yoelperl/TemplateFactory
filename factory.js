"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var express = require("express");
var ejs = require("ejs");
var path = require("path"), app = express(), filename = './views/basic-form.ejs', params = { controls: data_1.DATA.children };
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', function (req, res, next) {
    res.render(filename, params);
});
ejs.renderFile(filename, params, {}, function (err, str) {
    console.log('err', err);
    console.log('str');
    console.log(str);
});
app.listen(3000);
