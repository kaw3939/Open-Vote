var flatiron = require('flatiron'),
    path = require('path'),
    app = flatiron.app,
    mongoose = require('mongoose'),
    redis = require('redis-client'),
    underscore = require('underscore'),
    backbone = require('backbone');

app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

app.use(flatiron.plugins.http);

app.router.get('/', function () {
  this.res.json({ 'hello': 'world' })
});

app.start(80);
