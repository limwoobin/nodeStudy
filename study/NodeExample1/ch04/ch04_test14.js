var fs = require('fs');

var dirname = 'dric';
fs.mkdir(dirname , (err) => {
    if(err) throw err;
    console.log('디렉토리 생성');
});

fs.rmdir(dirname , (err) => {
    if(err) throw err;
    console.log('디렉토리 삭제');
});