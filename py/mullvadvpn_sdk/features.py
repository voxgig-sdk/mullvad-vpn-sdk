# MullvadVpn SDK feature factory

from mullvadvpn_sdk.feature.base_feature import MullvadVpnBaseFeature
from mullvadvpn_sdk.feature.ratelimit_feature import MullvadVpnRatelimitFeature
from mullvadvpn_sdk.feature.retry_feature import MullvadVpnRetryFeature
from mullvadvpn_sdk.feature.test_feature import MullvadVpnTestFeature
from mullvadvpn_sdk.feature.timeout_feature import MullvadVpnTimeoutFeature


_FEATURES = {
    "base": lambda: MullvadVpnBaseFeature(),
    "ratelimit": lambda: MullvadVpnRatelimitFeature(),
    "retry": lambda: MullvadVpnRetryFeature(),
    "test": lambda: MullvadVpnTestFeature(),
    "timeout": lambda: MullvadVpnTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
