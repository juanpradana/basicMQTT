import { connect } from 'mqtt'
import dotenv from 'dotenv';
dotenv.config();

const mqttClient = connect(process.env.ADDRESS_MQTT, { username: 'ranto', password: 'koplak' });

const queryTopic = 'resolveMyQuery';
const responseTopic = 'responseFromServer';

mqttClient.on('message', function (topic, message) {
    // message is Buffer
    console.log('Received response from server:-', message.toString())
    mqttClient.end();
});

mqttClient.on('connect', function () {
    console.log('Client connected to Mqtt broker');
    // Subscribe to the response topic 
    mqttClient.subscribe(responseTopic);
    // Publish message
    mqttClient.publish(queryTopic, 'Hello server, can you hear me?');
    console.log('Published to server...');
});