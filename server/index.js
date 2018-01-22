import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import config from './config'
import sendform from './routes/sendform';
// import './database';


let app = express();

const compiler = webpack(webpackConfig);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.use(cookieParser());
app.use(session({
    secret: '12345',
    name: 'test-gkb',
    cookie: {maxAge: 5*60*1000},
    saveUnintialized: false,
    resave: false
}));

// load static files like css, pictures
app.use(express.static('public'));

// set up hot reload for reacjs
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));
// parse data from request body ==> use bodyParser middleware

// match url, then apply the middleware
app.use('/api/sendform', sendform);


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


if (config.dev) {
  console.log(app.listen(9000, () => console.log('Running on localhost:9000')));
} else {
  console.log(app.listen(80, () => console.log('Running on server which is public.')));
}

module.exports = app;
