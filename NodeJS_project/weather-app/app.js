const request = require('postman-request')

// const url = "http://api.weatherstack.com/current?access_key=3b54beba076d64de34fc95e1e245a1df&query=54.632778,18.510278&units=m"

// request({url: url, json: true}, (error, response) => {
    
//     if(error) {
//         console.log("Unable to connect to weather service!!")
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     } else {
//         const temperature  = (response.body.current.temperature)
//         const cloudcover   = (response.body.current.cloudcover)
//         const weather_desc = (response.body.current.weather_descriptions[0])
        
//         console.log("It is " + weather_desc + " and it is " + temperature + " degrees")
//         console.log("The cloud cover is " + cloudcover)
//     }

// })

const url_geocoding= "https://api.mapbox.com/geocoding/v5/mapbox.places/Rewa%20Poland.json?access_token=pk.eyJ1IjoidG9ta3J6eXBhciIsImEiOiJjbDhoOHpuMDcwNnh3M25sYzVzb3h0dzBhIn0.-JqTKCT9O509P56ldQgqCQ&limit=1"

request({url: url_geocoding, json: true}, (error, response) => {

    if(error) {
        console.log("Unable to connect to location service!!")
    } else if (response.body.features.length === 0) {
        console.log("Unable to find location")
    } else {
        const lon = (response.body.features[0].center[0])
        const lat = (response.body.features[0].center[1])

        console.log("The longitude is: "+lon)
        console.log("The latitude is: "+lat)
    }
})