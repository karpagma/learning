const {promisify} = require('util');
const request = promisify(require('request'));

async function geoCodeAddress(address) {
    const url = {
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        json: true
    };
    const result = await request(url);
    if (result.body.status === 'ZERO_RESULTS') {
        throw new Error('Address not found');
    }
    return {
        address: result.body.results[0].formatted_address,
        location: {
            lat: result.body.results[0].geometry.location.lat,
            lng: result.body.results[0].geometry.location.lng
        }
    }
}

module.exports = {
    geoCodeAddress
}