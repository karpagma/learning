const {promisify} = require('util');
const request = promisify(require('request'));

async function getWeather(location) {
    const url = {
        url: `https://api.darksky.net/forecast/867d208c3d6deb32dd705c1d8a4819fa/${location.lat},${location.lng}?units=uk2`,
        json: true
    };
    const result = await request(url);
    if (result.statusCode !== 200) {
        throw new Error('Unable to fetch weather');
    }
    return {
        temperature: result.body.currently.temperature
    }
}

module.exports = {
    getWeather
}
