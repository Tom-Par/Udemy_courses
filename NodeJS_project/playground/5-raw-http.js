const http = require('http')
const url = "http://api.weatherstack.com/current?access_key=3b54beba076d64de34fc95e1e245a1df&query=40,-75&units=m"

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', () => {
    console.log('An error', error)
})

request.end()