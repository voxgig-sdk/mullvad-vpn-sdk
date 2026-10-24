import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "ip_information",
    "accessor": "IpInformation",
    "op": "load",
    "method": "GET",
    "path": "/json",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "ip": "192.0.2.1",
      "country": "SE",
      "city": "Gothenburg",
      "latitude": 57.7089,
      "longitude": 11.9746,
      "mullvad_exit_ip": true,
      "mullvad_exit_ip_hostname": "se-got-wg-001",
      "mullvad_server_type": "wireguard",
      "blacklisted": {
        "blacklisted": false,
        "results": [
          {}
        ]
      },
      "organization": "Mullvad VPN"
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
