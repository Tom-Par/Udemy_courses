const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=3b54beba076d64de34fc95e1e245a1df&query="+longitude+","+latitude+"&units=m"

    request({url: url, json: true}, (error, response) => {
    
        if(error) {
            callback("Unable to connect to weather service!!", undefined)
        } else if (response.body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, "It is " + response.body.current.weather_descriptions[0] + " and it is " + response.body.current.temperature + " degrees. \nThe cloud cover is " + response.body.current.cloudcover
            )
        }
    })
}

module.exports = forecast