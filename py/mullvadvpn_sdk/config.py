# MullvadVpn SDK configuration


def make_config():
    return {
        "main": {
            "name": "MullvadVpn",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://ipv4.am.i.mullvad.net",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "ip_information": {},
            },
        },
        "entity": {
      "ip_information": {
        "fields": [
          {
            "active": True,
            "name": "blacklisted",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "results",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
        ],
        "name": "ip_information",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/json",
                "parts": [
                  "json",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.blacklisted`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
