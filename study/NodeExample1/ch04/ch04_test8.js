var fs = require('fs');

// r - 읽기에 사용되는 플래그
// w - 쓰기에 사용하는 플래그
// w+ - 읽기와 쓰기 모두 , 파일이 없으면 만들어지고 있으면 이전 내용 모두 삭제
// a+ - 읽기와 추가에 사용되는 플래그 , 파일이 없으면 만들고 있으면 이전 내용에 새로운 내용 추가

fs.open('./output.txt' , 'w' , (err , fd) => {
    if(err) throw err;

    var buf = new Buffer('hihi');
    fs.write(fd , buf , 0 , buf.length , null , (err , written , buffer) => {
        if(err) throw err;
            console.log(err , written , buffer);
            fs.close(fd , () => {
                console.log('파일 열고 데이터쓰고 닫기 완료');
            })
    })
});