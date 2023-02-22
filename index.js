import { connect } from 'mqtt'
import dotenv from 'dotenv';
dotenv.config();

const mqttClient = connect(process.env.ADDRESS_MQTT, { username: 'ranto', password: 'koplak' });

const queryTopic = 'resolveMyQuery';
const responseTopic = 'responseFromServer';

mqttClient.on('connect', function () {
    console.log('Server connected to Mqtt broker');
    mqttClient.subscribe(queryTopic);
});

// On receiving message from any client
mqttClient.on('message', function (topic, message) {
    console.log('Received query from client: -', message.toString());
    // Responding to client
    mqttClient.publish(responseTopic, 'Hello client, yes I can hear you');
    console.log('Responded to client');
    mqttClient.end();
});