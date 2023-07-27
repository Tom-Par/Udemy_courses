const request = require('postman-request')

const url = "http://api.weatherstack.com/current?access_key=3b54beba076d64de34fc95e1e245a1df&query=54.632778,18.510278&units=m"

request({url: url, json: true}, (error, response) => {
    const temperature = (response.body.current.temperature)
    const cloudcover = (response.body.current.cloudcover)
    const weather_desc = (response.body.current.weather_descriptions[0])

    console.log("It is " + weather_desc + " and it is " + temperature + " degrees")
    console.log("The cloud cover is " + cloudcover)
})