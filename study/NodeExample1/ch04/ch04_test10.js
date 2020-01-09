// 버퍼 객체를 크기만 지정해 만든 후 문자열을 쓴다
const output = '하이!';
const buffer1 = new Buffer(10);
const len = buffer1.write(output , 'utf8');

console.log('첫번째 버퍼의 문자열:' + buffer1.toString());


// 버퍼 객체를 문자열을 이용해 만든다
const buffer2 = new Buffer('안녕2!!' , 'utf8');
console.log(buffer2.toString());

// 타입확인
console.log(Buffer.isBuffer(buffer1));

//버퍼 객체에 들어있는 문자열 데이터를 문자 변수로 만듬
var byteLen = Buffer.byteLength(output);
var str1 = buffer1.toString('utf8' , 0 , byteLen);
var str2 = buffer2.toString('utf8');
console.log(str1 + ',' + str2);


//첫번째 버퍼 객체의 문자열을 두번째 버퍼로 복사
buffer1.copy(buffer2 , 0 , 0 , len);
console.log('복사한 후의 문자열:' + buffer2.toString('utf8'));

// 두 개의 버퍼를 붙여준다
var buffer3 = Buffer.concat([buffer1 , buffer2]);
console.log('붙인 후 문자열:' + buffer3.toString('utf8'));