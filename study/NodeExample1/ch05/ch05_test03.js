const http = require('http');
const fs = require('fs');
const server = http.createServer((req ,res) => {
    // res.writeHead(200 , {'Content-Type':'text/html; charset=utf-8'});
    // res.write('좆까' + req);
    // res.end();
});

server.on('request' , (req , res) => {

    let filename = 'horse.jpg';
    let infile = fs.createReadStream(filename , {flags:'r'});
    let filelength = 0;
    let curlength = 0;

    fs.stat(filename , (err , stats) => {
        filelength = stats.size;
    });

    res.writeHead(200 , {'Content-Type':'image/png'});

    infile.on('readable' , () => {
        let chunk;
        while(null !== (chunk = infile.read())){
            console.log('읽어들인 크기' + chunk.length);
            curlength += chunk.length;
            res.write(chunk , 'utf8' , (err) => {
                console.log('쓰기 완료' + curlength +','+filelength);
                if(curlength >= filelength){
                    res.end();
                }
            });
        }
    });
});

server.listen(3000 , () => {
    console.log('서버시작');
})