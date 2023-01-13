"use strict";

const redis = require('redis');


const main = async () => {  

    const client = new redis.createClient();

    client.on('error', (err) => console.log("redis client error", err));

    await client.connect();

    var keys = await client.keys('key*');

    console.log(keys);

    await client.disconnect();
}

main();

