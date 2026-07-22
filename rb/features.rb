# MullvadVpn SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MullvadVpnFeatures
  def self.make_feature(name)
    case name
    when "base"
      MullvadVpnBaseFeature.new
    when "test"
      MullvadVpnTestFeature.new
    else
      MullvadVpnBaseFeature.new
    end
  end
end
