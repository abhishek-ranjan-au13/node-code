const geocoding = require("./utils/geocode");
const forecast = require("./utils/forcast");
const address = process.argv[2];
if (!address) {
  console.log("please provide with the address");
} else {
  geocoding(address, (error, data) => {
    if (error) {
      console.log("error ", error);
    } else {
      forecast(data.latitude, data.longitude, (error, foreCastdata) => {
        if (error) {
          console.log("Error", error);
        } else {
          console.log(data.location);
          console.log(foreCastdata);
        }
      });
    }
  });
}
