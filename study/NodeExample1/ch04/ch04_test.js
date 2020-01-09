// 1.쿼리스트링 예제
// var url = require('url');
// var qs = require('querystring');

// var curUrl = url.parse('https://www.naver.com?id=ASD');
// var curStr = url.format(curUrl);

// var param = qs.parse(curUrl.query);

// console.log(curStr);
// console.dir(curUrl);

// console.log(param.id);
// console.log(qs.stringify);


// 2.이벤트 핸들러
// process.on('exit' , function(){
//     console.log('exit 이벤트 발생');
// });

// setTimeout(function(){
//     console.log('2초 후 실행');
//     process.exit();
// } , 2000);


process.on('tick' , (count) => {
    console.log('tick Event' + count);
});

setTimeout(() => {
    console.log('2초후 전달');
    process.emit('tick' , 5);
},2000);