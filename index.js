const axios = require('axios');
const env = require('process-env');
 
const discoverArtistUrl = "http://app.ticketmaster.com/discovery/v1/events.json?keyword="
const artists = ["Queen"];

let url = discoverArtistUrl + artists[0];
url += "&apikey=" + env.get('CONSUMER_KEY');

const main = async () => {
  console.log(url)
  try {
    const result = await axios.get(url);
    const formattedData = JSON.stringify(result.data);
    console.log(JSON.stringify(formattedData));
  } catch (err) {
    console.log(err)
  }
};

main(); 