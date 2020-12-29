'use strict'

const agent = {
  id: 1,
  uuid: 'yyyy-yyyy-yyy',
  name: 'fixture',
  username: 'platzi',
  hostname: 'test-host',
  pid: 0,
  connected: true,
  createdAt: new Date(),
  updatedAt: new Date()
}

const agents = [
  agent,
  { ...agent, id: 2, uuid: 'yyyy-yyyy-yyyw', connected: false, username: 'text' },
  { ...agent, id: 3, uuid: 'yyyy-yyyy-yyyw' },
  { ...agent, id: 4, uuid: 'yyyy-yyyy-yyyz', username: 'test' }
]

module.exports = {
  single: agent,
  all: agents,
  connected: agents.filter(a => a.connected),
  platzi: agents.filter(a => a.username === 'platzi'),
  byUuid: id => agents.filter(a => a.uuid === id).shift(),
  byId: id => agents.filter(a => a.id === id).shift()
}
