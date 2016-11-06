'use strict'

import 'colors'

export default function errorLogExit (msg, code) {
  const errMsg = msg || 'something went wrong ...'
  const exitCode = code || 1

  console.log(`Error: ${errMsg}`.bold.red)
  process.exit(exitCode)
}
