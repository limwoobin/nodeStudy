var fs = require('fs');

var infile = fs.createReadStream('./output.txt' , {flags:'r'});
var outfile = fs.createWriteStream('./output2.txt' , {flags:'w'});

infile.on('data' , (data) => {
    console.log('읽어들인 데이터' + data);
    outfile.write(data);
});

infile.on('end' , () => {
    console.log('파일 읽기 종료');
    outfile.end(() => {
        console.log('파일 쓰기 종료');
    });
});