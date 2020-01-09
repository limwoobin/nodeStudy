const http = require('http');
const server = http.createServer();

server.listen(3000 , () => {
    console.log('Server Start');
});


server.on('connection' , (socket) => {
    let addr = socket.address();
    console.log('클라이언트 접속' + addr.address , addr.port);
});

server.on('request' , (req , res) => {
    console.log('요청이 들어옴');
    console.dir(req);
});

server.on('close' , () => {
    console.log('서버 종료');
})