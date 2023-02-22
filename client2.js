import { connect } from 'mqtt'
import dotenv from 'dotenv';
dotenv.config();

const mqttClient = connect(process.env.ADDRESS_MQTT, { username: 'zan', password: 'mainnyahebat' });

const queryTopic = 'zanTelemetry';

mqttClient.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
});

mqttClient.on('connect', function () {
    console.log('Client connected to Mqtt broker');
    mqttClient.subscribe(queryTopic);
});