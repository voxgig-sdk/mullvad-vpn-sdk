# MullvadVpn SDK utility: prepare_body
require_relative 'media'
module MullvadVpnUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return MullvadVpnUtilities.raw_body(ctx.reqdata) if MullvadVpnUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
