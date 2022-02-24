var AWS = require('aws-sdk');

var S3 = new AWS.S3();
 var params ={
     Bucket:'vscode-created-bucket',
     Key:'My_temp.txt'
 };

 S3.getObject(params, function(err , data)
 {
     if(err) 
     console.log("error occured: "+err);
     else
     console.log("Data in file is: "+data.Body.toString());
 })