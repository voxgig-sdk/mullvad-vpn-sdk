<?php
declare(strict_types=1);

// MullvadVpn SDK exists test

require_once __DIR__ . '/../mullvadvpn_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = MullvadVpnSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
