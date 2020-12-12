'use strict'

function parsePayload (paylod) {
  if (paylod instanceof Buffer) {
    paylod = paylod.toString('utf8')
  }

  try {
    paylod = JSON.parse(paylod)
  } catch (error) {
    paylod = null
  }

  return paylod
}

module.exports = {
  parsePayload
}
