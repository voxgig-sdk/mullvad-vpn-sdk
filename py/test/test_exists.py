# MullvadVpn SDK exists test

import pytest
from mullvadvpn_sdk import MullvadVpnSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MullvadVpnSDK.test(None, None)
        assert testsdk is not None
