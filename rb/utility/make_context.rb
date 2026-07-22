# MullvadVpn SDK utility: make_context
require_relative '../core/context'
module MullvadVpnUtilities
  MakeContext = ->(ctxmap, basectx) {
    MullvadVpnContext.new(ctxmap, basectx)
  }
end
