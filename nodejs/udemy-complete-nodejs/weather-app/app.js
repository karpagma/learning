const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


async function main() {
    try {
        const address = await geocode.geoCodeAddress(argv.address);
        const forecast = await weather.getWeather(address.location);

        console.log(`Temperature in ${address.address} is : ${forecast.temperature} C`);
    }catch(e) {
        console.error(e);
    }
}

main();
