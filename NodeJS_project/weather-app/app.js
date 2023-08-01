const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(54.6327, 18.5106405, (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})

geocode("Rewa Poland", (error, data) => {
    console.log("Error: ", error)
    console.log('Data: ', data)
})