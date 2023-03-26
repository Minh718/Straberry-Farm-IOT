import mqtt from "precompiled-mqtt";

const username = 'Heo_Rey'
const key = 'aio_ytWg01LkyDDHKOEPbN6AO8XIDmpt'

const brokerUrl = `mqtts://${username}:${key}@io.adafruit.com`
const options = {
    port: 443
}
console.log(brokerUrl)
console.log(key)
const client = mqtt.connect(brokerUrl,options);
client.on('connect', () => {
    console.log("Connected to Adafruit!")
});
client.on('disconnect', () => {
    console.log("Disconnected to Adafruit!")
})

client.on('message', (topic, message, packet) => {
        console.log("Received '" + message + "' on '" + topic + "'");
})

function subscribe(feed_id){
    client.subscribe(username + "/feeds/" + feed_id,()=>{
        console.log("Subscribed to " + feed_id)
    })
}
subscribe('humidity-sensor')
subscribe('light-sensor')
subscribe('strawberry-status')
subscribe('temperature-sensor')
subscribe('fan')
subscribe('pumper')
subscribe('led')

export default client;
export function publish(feed_id,data){
    client.publish(username + "/feeds/" + feed_id,data,()=>{
        console.log("Published to " + feed_id + " : " + data);
    })
}