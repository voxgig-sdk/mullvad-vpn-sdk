-- MullvadVpn SDK configuration

local function make_config()
  return {
    main = {
      name = "MullvadVpn",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["active"] = true,
            ["name"] = "blacklisted",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "city",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "country",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "ip",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "latitude",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "longitude",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "mullvad_exit_ip",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "mullvad_exit_ip_hostname",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "mullvad_server_type",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "organization",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 9,
          },
        },
        ["name"] = "ip_information",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/json",
                ["parts"] = {
                  "json",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
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
