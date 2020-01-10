if (process.env.NODE_ENV === 'production') {
    module.exports = require('./settings-prod.json')
} else {
    module.exports = require('./settings-dev.json')
}
