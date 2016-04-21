#! /usr/bin/env node
'use strict';

// hack for blue-green deployments
if (process.env.CLASSIFIER_ID){
  process.env.CLASSIFIER_ID = process.env.CLASSIFIER_ID.replace(/\"/g,'');
}
if (process.env.GOOGLE_ANALYTICS){
  process.env.GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS.replace(/\"/g,'');
}
// Deployment tracking
require('cf-deployment-tracker-client').track();

var server = require('./app');
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

server.listen(port, function () {
  console.log('Server running on port: %d', port);
});

