import MQTTAdafruitIO from "./adafruit_api.js"

const username = 'Heo_Rey'
const key = 'aio_ytWg01LkyDDHKOEPbN6AO8XIDmpt'
const options = {
    port: 443
}
let client = new MQTTAdafruitIO(username,key,options)

client.connect()
client.subscribe('humidity-sensor')
client.subscribe('light-sensor')
client.subscribe('strawberry-status')
client.subscribe('temperature-sensor')
client.subscribe('fan')
client.subscribe('pumper')
client.subscribe('led')

