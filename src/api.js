const rootUtrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=af913b16b042cd4c451a62b8ba7bb8d9'

export  default api = (lat, lon) => {

  const url = `${rootUtrl}&lat=${lat}&lon=${lon}`
  console.log('0', url)

  return fetch(url)
    .then((res) => {
      console.log('1', res)
      return res.json()
    })
    .then((json) => {
    console.log(json)
      return {
        city: json.name,
        tempetarute: kelvinToF(json.main.temp),
        description: json.weather[0].description,
      }
    })
    .catch(function(error) {
      console.log('Error fetch operation: ' + error.message);
    })

}

const kelvinToF = (kelvin) => {
  // return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F'
  return Math.round((kelvin - 273.15) ) + ' ˚C'
}