# MullvadVpn SDK utility: make_context

from mullvadvpn_sdk.core.context import MullvadVpnContext


def make_context_util(ctxmap, basectx):
    return MullvadVpnContext(ctxmap, basectx)
