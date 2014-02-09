var sentiment = require('./sentiment'),
    fs = require('fs'),
    data = fs.readFileSync('AFINN-111.txt');
    
var anew = sentiment.createanew(data);

var text = 'Node is great and wonderful';
var moods = sentiment.getsentiments(text,anew);
 
if(moods.length > 0){
  console.log("Input: " + text);
  console.log("Matches: " + moods.length);
  console.log("Score:" + sentiment.getsentimentscore(moods));  
}   