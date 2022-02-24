AWS = require('aws-sdk');
var S3 = new AWS.S3();

 var params = {
     Bucket:'vscode-created-bucket'
 };

 S3.createBucket(params , function(err,data)
 {
     if(err) console.log(err , err.stack); //err occured
     else console.log("Bucket Successfully created"); // success response
 })
