
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MullvadVpnSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MullvadVpnSDK.test()
    equal(testsdk instanceof MullvadVpnSDK, true,
      'MullvadVpnSDK.test() must return a client synchronously')
  })

})
