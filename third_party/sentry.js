var sentry = require('raven')

module.exports = (function configureSentry(){
    var sentryKey = process.env.SENTRY_DSN
    return
    if (sentryKey) {
        console.log("Configuring Sentry")
        var client = new sentry.Client()
        client.patchGlobal()
        client.captureMessage("Attempting")
    } else {
        console.log("Sentry not configured")
    }
})