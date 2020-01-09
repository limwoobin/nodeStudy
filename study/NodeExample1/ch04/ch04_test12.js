var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname , (exists) => {
    if(exists){
        fs.unlink(outname , (err) => {
            if(err) throw err;
            console.log('기존파일' + outname + '삭제함');
        });
    }

    var infile = fs.createReadStream(inname , {flags:'r'});
    var outfile = fs.createWriteStream(outname , {flags:'w'});
    infile.pipe(outfile);
    console.log('파일복사['+inname+']'+ '->' + '['+outname+']');
});