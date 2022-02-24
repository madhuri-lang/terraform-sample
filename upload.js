var fs = require('fs');
var AWS = require('aws-sdk');

var S3 = new AWS.S3({params : {Bucket:'vscode-created-bucket'}});

fs.readFile("temp.txt" , function(err, data)
{
    var params ={
           Key : "My_temp.txt",
           Body:data
    };

    S3.upload(params ,function(err,data)
    {
      if(err)
          console.log("error occured: "+err);
      else
         console.log("Successfully uploaded data");
    });
});