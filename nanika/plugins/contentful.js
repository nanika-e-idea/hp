const contentful = require('contentful')
const environment = "development"
const env = require(`../env.${environment}.js`)

const config = {
  space: env.CTFL_SPACE,
  accessToken: env.CTFL_ACCESS_TOKEN
}

module.exports = {
  createClient() {
    return contentful.createClient( config )
  }
}