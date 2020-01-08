var fs = require('fs');

fs.writeFile('./output.txt' , 'Hello world' , (err) => {
    if(err) {
        console.log('ERROR:' + err);
    }

    console.log('txt파일 쓰기 완료');
});