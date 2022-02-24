var AWS = require('aws-sdk');

var S3 = new AWS.S3();
 var params ={
     Bucket:'vscode-created-bucket',
     Key:'My_temp.txt'
 };

 S3.deleteObject(params, function(err , data)
 {
     if(err) 
     console.log("error occured: "+err);
     else
     console.log("Successfully Deleted");
 })