const fs = require('fs');
const https = require('https');

const app = require("../app");

const options = {
    key: fs.readFileSync('./src/keys/key.pem'),
    cert: fs.readFileSync('./src/keys/cert.pem')
};

https.createServer(options, app).listen(443, () => {
  console.log('HTTPS 서버가 443 포트에서 실행 중입니다.');
});
