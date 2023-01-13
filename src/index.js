"use strict";

const redis = require('redis');

const options = {
    url: ''
};

const main = async () => {  

    const client = new redis.createClient(options);

    client.on('error', (err) => console.log("redis client error", err));

    await client.connect();

    var keys = await client.keys('*');

    console.log(keys);

    await client.disconnect();
}

main();

