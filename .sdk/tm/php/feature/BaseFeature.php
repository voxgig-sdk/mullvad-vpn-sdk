<?php
declare(strict_types=1);

// MullvadVpn SDK base feature

class MullvadVpnBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(MullvadVpnContext $ctx, array $options): void {}
    public function PostConstruct(MullvadVpnContext $ctx): void {}
    public function PostConstructEntity(MullvadVpnContext $ctx): void {}
    public function SetData(MullvadVpnContext $ctx): void {}
    public function GetData(MullvadVpnContext $ctx): void {}
    public function GetMatch(MullvadVpnContext $ctx): void {}
    public function SetMatch(MullvadVpnContext $ctx): void {}
    public function PrePoint(MullvadVpnContext $ctx): void {}
    public function PreSpec(MullvadVpnContext $ctx): void {}
    public function PreRequest(MullvadVpnContext $ctx): void {}
    public function PreResponse(MullvadVpnContext $ctx): void {}
    public function PreResult(MullvadVpnContext $ctx): void {}
    public function PreDone(MullvadVpnContext $ctx): void {}
    public function PreUnexpected(MullvadVpnContext $ctx): void {}
}
