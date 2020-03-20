let weatherData = `
[{
    "country": "USA",
    "locations": [{
            "city": "New York",
            "temp": [7, 45]
        },
        {
            "city": "San Francisco",
            "temp": [18, 65]
        },
        {
            "city": "Los Angeles",
            "temp": [21, 70]
        }
    ]
},
{
    "country": "UK",
    "locations": [{
        "city": "London",
        "temp": [10, 50]
    }]
},
{
    "country": "Japan",
    "locations": [{
        "city": "Tokyo",
        "temp": [7, 45]
    }]
}
]`

try {
    const weather = JSON.parse(weatherData)
    console.log("------ Global weather ------\n")
    weather.forEach((item, i) => {
        const countries = item.country
        const locations = item.locations

        console.log(`\nCountry ${countries}`)
        locations.forEach((location, j) => {
            const city = location.city
            const tempCelcius = location.temp[0]
            const tempFarenheight = location.temp[1]            
            console.log(`The weather in ${city} is ${tempFarenheight} degrees Farenheight or ${tempCelcius} degrees Celcius`)
        })
    })

} catch(error) {
    console.log(`Error parsing JSON ${error}`)
}

