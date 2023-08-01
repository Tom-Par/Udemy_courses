const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address) {
    console.log('Pleae provide an address')
} else {
    geocode(address, (error, data) => {
        if (error){
            return console.log(error)
        }
        
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(data.name)
            console.log(forecastData)
        })
    })

}