const http = require('http');

var options = {
    host: 'www.google.com',
    port: '80',
    path: '/'
};

let req = http.get(options , (res) => {
    let resData = '';
    res.on('data' , (chunk) => {
        resData += chunk;
    });

    res.on('end' , () => {
        console.log(resData);
    });

    req.on('error' , (err) => {
        console.log('오류:' + err.message);
    })
});