var fs = require('fs');
var http = require('http');
var server = http.createServer((rqe , res) => {
    var instream = fs.createReadStream('./output.txt');
    instream.pipe(res);
});

// server.listen(3000 , 'localhost' , () => {
//     console.log('server start');
// });

server.listen(3000 , () => {
    console.log('Server gogo');
});
