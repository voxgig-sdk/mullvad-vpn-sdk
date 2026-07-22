<?php
declare(strict_types=1);

// Typed models for the MullvadVpn SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** IpInformation entity data model. */
class IpInformation
{
    public ?array $blacklisted = null;
    public ?string $city = null;
    public ?string $country = null;
    public ?string $ip = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?bool $mullvad_exit_ip = null;
    public ?string $mullvad_exit_ip_hostname = null;
    public ?string $mullvad_server_type = null;
    public ?string $organization = null;
}

/** Request payload for IpInformation#load. */
class IpInformationLoadMatch
{
    public ?array $blacklisted = null;
    public ?string $city = null;
    public ?string $country = null;
    public ?string $ip = null;
    public ?float $latitude = null;
    public ?float $longitude = null;
    public ?bool $mullvad_exit_ip = null;
    public ?string $mullvad_exit_ip_hostname = null;
    public ?string $mullvad_server_type = null;
    public ?string $organization = null;
}

