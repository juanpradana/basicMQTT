import { connect } from 'mqtt'
import dotenv from 'dotenv';
dotenv.config();

const mqttClient = connect(process.env.ADDRESS_MQTT, { username: 'zan', password: 'mainnyahebat' });

const queryTopic = 'resolveMyQuery';

let count = 0;

mqttClient.on('connect', function () {
    console.log('Server connected to Mqtt broker');
});

setInterval(() => {
    mqttClient.publish(queryTopic, 'Hello client ' + count);
    count++;
}, 1000);