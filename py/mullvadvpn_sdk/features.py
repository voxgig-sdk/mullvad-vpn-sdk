# MullvadVpn SDK feature factory

from mullvadvpn_sdk.feature.base_feature import MullvadVpnBaseFeature
from mullvadvpn_sdk.feature.test_feature import MullvadVpnTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MullvadVpnBaseFeature(),
        "test": lambda: MullvadVpnTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
