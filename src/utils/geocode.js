const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicmFuZG9sZnIiLCJhIjoiY2ttemxmYjFqMDR6NzJ3bWgyODZld2l0YSJ9.0GNUbQx4JBBtooscCdND_A&limit=1`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (body.features.length === 0) {
            callback('Unable to find location, try another search.')
       
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0]
            })
        }
    })
}

module.exports = geocode;