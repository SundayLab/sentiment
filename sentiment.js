var fs = require('fs');
var data = fs.readFileSync('AFINN-111.txt');

module.exports.createanew = function createanew(data){
    var dict = []; 
    var array = data.toString().split("\n");
    for(i in array) {
        var keyvaluepair = array[i].toString().split("\t");
        dict.push({
        key:   keyvaluepair[0],
        value: keyvaluepair[1]
        });
    }

    return dict;
};


module.exports.search = function search(s, arr){
    var matches = [];

    for (var i = arr.length; i--; ){
        for (key in arr[i]){
            if( arr[i].hasOwnProperty(key) && arr[i][key].indexOf(s) > -1 )
                matches.push(arr[i][key]);
        }
    }
    return matches;
};

module.exports.getsentiments = function getsentiments(text, arr){
    var matches = [];
    for (var key in arr) {
       if (arr.hasOwnProperty(key)) {
         var re = new RegExp("\\ "+arr[key].key+" ", "gi");
         var positive = re.exec(text);
         if(positive) {
            matches.push({
              key:   arr[key].key,
              value: arr[key].value
            }); 
         }
       }
     }
 return matches
};

module.exports.getsentimentscore = function getsentimentscore(arr){
    var score = 0;
    for (var key in arr) {
       if (arr.hasOwnProperty(key)) {
         score += parseInt(arr[key].value);
       }
     }
 return score
};







