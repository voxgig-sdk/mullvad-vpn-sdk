# MullvadVpn SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "MullvadVpn",
            "slug": "mullvad-vpn",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "name": "blacklisted",
            "title": "Blacklisted",
            "type": "`$OBJECT`",
            "short": "Information about blacklist status",
          },
          {
            "name": "city",
            "title": "City",
            "type": "`$STRING`",
            "short": "City of the IP location",
          },
          {
            "name": "country",
            "title": "Country",
            "type": "`$STRING`",
            "short": "Country code of the IP location",
          },
          {
            "name": "ip",
            "title": "Ip",
            "type": "`$STRING`",
            "short": "The current IP address",
          },
          {
            "name": "latitude",
            "title": "Latitude",
            "type": "`$NUMBER`",
            "short": "Latitude coordinate of the IP location",
            "format": "float",
          },
          {
            "name": "longitude",
            "title": "Longitude",
            "type": "`$NUMBER`",
            "short": "Longitude coordinate of the IP location",
            "format": "float",
          },
          {
            "name": "mullvad_exit_ip",
            "title": "Mullvad Exit Ip",
            "type": "`$BOOLEAN`",
            "short": "Indicates if the IP is a Mullvad exit IP",
          },
          {
            "name": "mullvad_exit_ip_hostname",
            "title": "Mullvad Exit Ip Hostname",
            "type": "`$STRING`",
            "short": "Hostname of the Mullvad exit server",
          },
          {
            "name": "mullvad_server_type",
            "title": "Mullvad Server Type",
            "type": "`$STRING`",
            "short": "Type of Mullvad server",
          },
          {
            "name": "organization",
            "title": "Organization",
            "type": "`$STRING`",
            "short": "Organization associated with the IP",
          },
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
                    "lit": "json",
                  },
                ],
                "parts": [
                  "json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
