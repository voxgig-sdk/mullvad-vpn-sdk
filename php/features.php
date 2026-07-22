<?php
declare(strict_types=1);

// MullvadVpn SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class MullvadVpnFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new MullvadVpnBaseFeature();
            case "test":
                return new MullvadVpnTestFeature();
            default:
                return new MullvadVpnBaseFeature();
        }
    }
}
