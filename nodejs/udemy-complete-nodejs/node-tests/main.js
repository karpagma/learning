const utils = require('./utils/utils');

const main = async () => {
    const result = await utils.asyncAdd(2, 3);
    console.log(result);
}

main();