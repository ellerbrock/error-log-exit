'use strict'

import 'colors'

export default function errorLogExit (msg = 'something went wrong ...', exitCode = 1) {
  console.log(`Error: ${msg}`.bold.red)
  process.exit(exitCode)
}
