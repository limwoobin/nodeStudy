var fs = require('fs');

var syncData = fs.readFileSync('../../package-lock.json' , 'utf8');
// console.log(syncData);

fs.readFile('../../package-lock.json' , 'utf8' , function(err , data){
    console.log(data);
});


console.log('비동기로 읽기');