import {DATA} from './data';
import * as express from 'express';
import * as ejs from 'ejs';

const
	path     = require("path"),
	app      = express(),
	filename = './views/basic-form.ejs',
	params   = {controls: DATA.children};

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function (req, res, next) {
	res.render(filename, params);
});

ejs.renderFile(filename, params, {}, function (err, str) {
	console.log('err',err);
	console.log('str');
	console.log(str);
});

app.listen(3000);


