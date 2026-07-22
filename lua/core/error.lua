-- MullvadVpn SDK error

local MullvadVpnError = {}
MullvadVpnError.__index = MullvadVpnError


function MullvadVpnError.new(code, msg, ctx)
  local self = setmetatable({}, MullvadVpnError)
  self.is_sdk_error = true
  self.sdk = "MullvadVpn"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MullvadVpnError:error()
  return self.msg
end


function MullvadVpnError:__tostring()
  return self.msg
end


return MullvadVpnError
