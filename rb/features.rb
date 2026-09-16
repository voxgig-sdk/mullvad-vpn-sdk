# MullvadVpn SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MullvadVpnFeatures
  def self.make_feature(name)
    case name
    when "base"
      MullvadVpnBaseFeature.new
    when "ratelimit"
      MullvadVpnRatelimitFeature.new
    when "retry"
      MullvadVpnRetryFeature.new
    when "test"
      MullvadVpnTestFeature.new
    when "timeout"
      MullvadVpnTimeoutFeature.new
    else
      MullvadVpnBaseFeature.new
    end
  end
end
