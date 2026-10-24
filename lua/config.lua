-- MullvadVpn SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "MullvadVpn",
      slug = "mullvad-vpn",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["now"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://ipv4.am.i.mullvad.net",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["ip_information"] = {},
      },
    },
    entity = {
      ["ip_information"] = {
        ["fields"] = {
          {
            ["name"] = "blacklisted",
            ["title"] = "Blacklisted",
            ["type"] = "`$OBJECT`",
            ["short"] = "Information about blacklist status",
          },
          {
            ["name"] = "city",
            ["title"] = "City",
            ["type"] = "`$STRING`",
            ["short"] = "City of the IP location",
          },
          {
            ["name"] = "country",
            ["title"] = "Country",
            ["type"] = "`$STRING`",
            ["short"] = "Country code of the IP location",
          },
          {
            ["name"] = "ip",
            ["title"] = "Ip",
            ["type"] = "`$STRING`",
            ["short"] = "The current IP address",
          },
          {
            ["name"] = "latitude",
            ["title"] = "Latitude",
            ["type"] = "`$NUMBER`",
            ["short"] = "Latitude coordinate of the IP location",
            ["format"] = "float",
          },
          {
            ["name"] = "longitude",
            ["title"] = "Longitude",
            ["type"] = "`$NUMBER`",
            ["short"] = "Longitude coordinate of the IP location",
            ["format"] = "float",
          },
          {
            ["name"] = "mullvad_exit_ip",
            ["title"] = "Mullvad Exit Ip",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Indicates if the IP is a Mullvad exit IP",
          },
          {
            ["name"] = "mullvad_exit_ip_hostname",
            ["title"] = "Mullvad Exit Ip Hostname",
            ["type"] = "`$STRING`",
            ["short"] = "Hostname of the Mullvad exit server",
          },
          {
            ["name"] = "mullvad_server_type",
            ["title"] = "Mullvad Server Type",
            ["type"] = "`$STRING`",
            ["short"] = "Type of Mullvad server",
          },
          {
            ["name"] = "organization",
            ["title"] = "Organization",
            ["type"] = "`$STRING`",
            ["short"] = "Organization associated with the IP",
          },
        },
        ["name"] = "ip_information",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/json",
                ["segments"] = {
                  {
                    ["lit"] = "json",
                  },
                },
                ["parts"] = {
                  "json",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
                ["response"] = {
                  ["kind"] = "json",
                  ["media"] = "application/json",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
