# MullvadVpn SDK configuration

module MullvadVpnConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "MullvadVpn",
        "slug" => "mullvad-vpn",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://ipv4.am.i.mullvad.net",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "ip_information" => {},
        },
      },
      "entity" => {
        "ip_information" => {
          "fields" => [
            {
              "name" => "blacklisted",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "results",
              "type" => "`$ARRAY`",
            },
          ],
          "name" => "ip_information",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/json",
                  "parts" => [
                    "json",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.blacklisted`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    MullvadVpnFeatures.make_feature(name)
  end
end
