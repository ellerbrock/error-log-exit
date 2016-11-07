'use strict'

import 'colors'

export default errorLogExit

function errorLogExit (msg, code) {
  msg = msg || 'something went wrong ...'
  code = code || 1

  console.log(`❌  Error: ${msg}`.bold.red)
  process.exit(code)
}

