
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
    name: 'ProjectName',
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
          "type": "`$OBJECT`",
          "index$": 0
        },
        {
          "active": true,
          "name": "city",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "country",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "ip",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "latitude",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 4
        },
        {
          "active": true,
          "name": "longitude",
          "req": false,
          "type": "`$NUMBER`",
          "index$": 5
        },
        {
          "active": true,
          "name": "mullvad_exit_ip",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 6
        },
        {
          "active": true,
          "name": "mullvad_exit_ip_hostname",
          "req": false,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "mullvad_server_type",
          "req": false,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "organization",
          "req": false,
          "type": "`$STRING`",
          "index$": 9
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
              "method": "GET",
              "orig": "/json",
              "parts": [
                "json"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
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

