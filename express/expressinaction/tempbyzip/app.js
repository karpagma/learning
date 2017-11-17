var path = require('path');
var express = require('express');
var zipdb = require('zippity-do-dah');
var ForecastIO = require('forecastio');
var forecastio = new ForecastIO('867d208c3d6deb32dd705c1d8a4819fa');
var app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get(/^\/(\d{5})$/, (req, res, next) => {
    var zipcode = req.params[0];
    var location = zipdb.zipcode(zipcode);
    if (!location.zipcode) {
        return next('uable to get the location for ' + zipcode);
    }

    var latitude = location.latitude;
    var longitude = location.longitude;
    console.log(`lat={latitude}, long={longitude}`);

    forecastio.forecast(latitude, longitude, (err, data) => {
        if (err) {
            console.log('ERROR ' + err);
            return next(err);
        }

        res.json({
            zipcode: zipcode,
            temperature: data.currently.temperature
        });
    });
});

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(3000, () => {
    console.log('app is running at port 3000');
});
