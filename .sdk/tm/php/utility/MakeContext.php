<?php
declare(strict_types=1);

// MullvadVpn SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MullvadVpnMakeContext
{
    public static function call(array $ctxmap, ?MullvadVpnContext $basectx): MullvadVpnContext
    {
        return new MullvadVpnContext($ctxmap, $basectx);
    }
}
