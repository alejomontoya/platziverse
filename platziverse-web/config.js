'use strict'

module.exports = {
  endpoint: process.env.API_ENVPOINT || 'http://localhost:3000',
  serverHost: process.env.SERVER_HOST || 'https://localhost:8080',
  mqttHost: process.env.MQTT_HOST || 'mqtt://localhost',
  apiToken: process.env.API_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBsYXR6aSIsImFkbWluIjp0cnVlLCJwZXJtaXNzaW9ucyI6WyJtZXRyaWNzOnJlYWQiXSwiaWF0IjoxNjEwOTI1NjgzfQ.4qAeDHzyVogKCaOiJB3Nie4uodOF_jBcUmj0cLmi9XM'
}