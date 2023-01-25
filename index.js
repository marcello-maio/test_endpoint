const https = require('https');
const apiKey = process.env.AWS_API_KEY;

const options = {
  hostname: 'c44r3fzrqc.execute-api.us-east-1.amazonaws.com',
  path: '/sql_test_api_stage/test2resource',
  method: 'GET',
  headers: {
    'x-api-key': apiKey
  }
};


const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const testBackend = document.getElementById('test-backend');
    testBackend.innerHTML = data;
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
