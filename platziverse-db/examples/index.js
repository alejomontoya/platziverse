'use strict'

const db = require('../')

async function run () {
  const config = {
    database: process.env.DB_NAME || 'platziverse',
    username: process.env.DB_USER || 'platzi',
    password: process.env.DB_PASS || '1234',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres'
  }

  const { Agent, Metric } = await db(config).catch(handleFaltaError)

  const agent = await Agent.createOrUpdate({
    uuid: 'yyy',
    name: 'text',
    username: 'test',
    hostname: 'test',
    pid: 1,
    connected: true
  }).catch(handleFaltaError)

  console.log('--agente--')
  console.log(agent)

  const agents = await Agent.findAll().catch(handleFaltaError)
  console.log('--agents---')
  console.log(agents)

  const metric = await Metric.create(agent.uuid, {
    type: 'memory',
    value: '300'
  }).catch(handleFaltaError)

  console.log('--metric--')
  console.log(metric)

  const metrics = await Metric.findByAgentUuid(agent.uuid).catch(handleFaltaError)
  console.log('--metrics--')
  console.log(metrics)

  const metricsByType = await Metric.findByTypeAgentUuid('memory', agent.uuid).catch(handleFaltaError)
  console.log('--metric-type---')
  console.log(metricsByType)
}

function handleFaltaError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()
