
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'MullvadVpn',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://ipv4.am.i.mullvad.net',

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      ip_information: {
      },

    }
  }


  entity = {
    "ip_information": {
      "fields": [
        {
          "active": true,
          "name": "blacklisted",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 0
        },
        {
          "active": true,
          "name": "results",
          "req": false,
          "type": "`$ARRAY`",
          "index$": 1
        }
      ],
      "name": "ip_information",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/json",
              "parts": [
                "json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.blacklisted`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

