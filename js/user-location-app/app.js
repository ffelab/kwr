const http = require("http");
const ReaderCity = require("@maxmind/geoip2-node").Reader;

http.createServer(function (req, res) {
	// ReaderCountry.open("./GeoLite2-Country.mmdb").then((reader) => {
	// 	const response = reader.country(userIP);

	// 	console.log(response.country.isoCode);
	// });

	ReaderCity.open("./GeoLite2-City.mmdb").then((reader) => {
		const response = reader.city("217.88.134.220");

		console.log(response.city.names.de);
	});

	res.end();
}).listen(3000);

// // Asynchronous database opening
// const ReaderCountry = require("@maxmind/geoip2-node").Reader;

// ReaderCountry.open("./GeoLite2-Country.mmdb").then((reader) => {
// 	const response = reader.country("217.88.134.220");

// 	console.log(response.country.isoCode);
// });

// Asynchronous database opening
