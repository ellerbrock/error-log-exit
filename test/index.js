import { expect } from 'chai'

import errorLogExit from '../src/index'

describe('Test for npm module error-log-exit', function () {

  it('errorLogExit should be a function', function () {
    expect(errorLogExit).to.be.a('function')
  })
})
