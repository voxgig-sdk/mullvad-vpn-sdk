-- MullvadVpn SDK exists test

local sdk = require("mullvad-vpn_sdk")

describe("MullvadVpnSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
