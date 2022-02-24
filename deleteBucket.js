var AWS = require('aws-sdk');

var S3 = new AWS.S3();
 var params ={
     Bucket:'vscode-created-bucket'
 };

 S3.deleteBucket(params, function(err , data)
 {
     if(err) 
     console.log("error occured: "+err);
     else
     console.log("Bucket Deleted Successfully");
 })