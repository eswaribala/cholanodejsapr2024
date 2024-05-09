const http=require('http')
const config=require('config')
const data = JSON.stringify({
    query: `{
     validateUser(firstName: ${config.get(graphqlData.firstName)}, mobileNo: ${config.get(graphqlData.mobileNo)}) {
        dob
        lastName
    }
  }`,
});
const options = {
    hostname: 'localhost',
    path: 'graphql',
    port: 3200,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        'User-Agent': 'Node',
    },
};
const req = http.request(options, (res) => {
    let data = '';
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d) => {
        data += d;
    });
    res.on('end', () => {
        console.log(JSON.parse(data).data);
    });
});
req.on('error', (error) => {
    console.error(error);
});

req.write(data);
req.end();

