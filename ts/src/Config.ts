
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'MullvadVpn',
        slug: "mullvad-vpn",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "now": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://ipv4.am.i.mullvad.net",

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
          "name": "blacklisted",
          "title": "Blacklisted",
          "type": "`$OBJECT`",
          "short": "Information about blacklist status"
        },
        {
          "name": "city",
          "title": "City",
          "type": "`$STRING`",
          "short": "City of the IP location"
        },
        {
          "name": "country",
          "title": "Country",
          "type": "`$STRING`",
          "short": "Country code of the IP location"
        },
        {
          "name": "ip",
          "title": "Ip",
          "type": "`$STRING`",
          "short": "The current IP address"
        },
        {
          "name": "latitude",
          "title": "Latitude",
          "type": "`$NUMBER`",
          "short": "Latitude coordinate of the IP location",
          "format": "float"
        },
        {
          "name": "longitude",
          "title": "Longitude",
          "type": "`$NUMBER`",
          "short": "Longitude coordinate of the IP location",
          "format": "float"
        },
        {
          "name": "mullvad_exit_ip",
          "title": "Mullvad Exit Ip",
          "type": "`$BOOLEAN`",
          "short": "Indicates if the IP is a Mullvad exit IP"
        },
        {
          "name": "mullvad_exit_ip_hostname",
          "title": "Mullvad Exit Ip Hostname",
          "type": "`$STRING`",
          "short": "Hostname of the Mullvad exit server"
        },
        {
          "name": "mullvad_server_type",
          "title": "Mullvad Server Type",
          "type": "`$STRING`",
          "short": "Type of Mullvad server"
        },
        {
          "name": "organization",
          "title": "Organization",
          "type": "`$STRING`",
          "short": "Organization associated with the IP"
        }
      ],
      "name": "ip_information",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/json",
              "segments": [
                {
                  "lit": "json"
                }
              ],
              "parts": [
                "json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {},
              "response": {
                "kind": "json",
                "media": "application/json"
              }
            }
          ]
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
  config,
  FEATURE_PLUGINS,
}

