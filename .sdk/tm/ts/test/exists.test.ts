
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MullvadVpnSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await MullvadVpnSDK.test()
    equal(null !== testsdk, true)
  })

})
