var fs = require('fs');

fs.open('./output.txt' , 'r' , (err , fd) => {
    if(err) throw err;

    var buf = new Buffer(10);
    console.log('버퍼타입-' + Buffer.isBuffer(buf));

    fs.read(fd , buf , 0 , buf.length , null , (err , bytesRead , buffer) => {
        if(err) throw err;

        var inStr = buffer.toString('utf8' , 0 , bytesRead);
        console.log('읽은 데이터' + inStr);

        console.log(err , bytesRead , buffer);

        fs.close(fd , () => {
            console.log('파일 열고 읽기 완료');
        });
    });
});