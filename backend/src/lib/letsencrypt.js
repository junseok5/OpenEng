const path = require('path')
const LE = require('greenlock-express')
const DEFAULT_DIR = path.join(require('os').homedir(), '/letsencrypt/etc')

const concat = Array.prototype.concat
const noop = function () {}

/**
 * Like nodes https.createServer but will automatically generate certificates from letsencrypt
 * falling back to self signed.
 *
 * @param {Object} opts
 * @param {Function} handler
 * @return {Server}
 */
function createServer(opts, app) {
  opts = opts || {}
  app = app || noop
  let handler = null
  let approveDomains = opts.domains
  const ports = (opts.ports = opts.ports || {})
  if (!('http' in ports)) ports.http = 80
  if (!('https' in ports)) ports.https = 443
  if (!opts.email) throw new TypeError('AutoSNI: Email is required.')
  if (!opts.agreeTos) throw new TypeError('AutoSNI: Must agree to LE TOS.')
  if (Array.isArray(approveDomains)) {
    // Flatten nested domains.
    approveDomains = concat.apply([], opts.domains || [])
    if (!approveDomains.length) {
      throw new TypeError('AutoSNI: You must specify at least one domain.')
    }
  } else if (typeof approveDomains !== 'function') {
    throw new TypeError(
      'AutoSNI: Domains option must be an array or a function.'
    )
  }

  if (typeof app === 'function') {
    // Allow passing in handler function directly.
    handler = app
  } else if (typeof app.emit === 'function') {
    // Allow passing in another node server (forwards requests).
    handler = function (req, res) {
      app.emit('request', req, res)
    }
  } else {
    throw new TypeError('AutoSNI: Invalid app provided.')
  }

  return LE.create({
    app: handler,
    debug: opts.debug,
    email: opts.email,
    agreeTos: opts.agreeTos,
    approveDomains,
    configDir: opts.dir || DEFAULT_DIR,
    server: opts.debug
      ? 'https://acme-staging-v02.api.letsencrypt.org/directory'
      : 'https://acme-v02.api.letsencrypt.org/directory',
    version: opts.version
  }).listen(opts.ports.http, opts.ports.https)
}

// Expose lib to the world.
module.exports = createServer
