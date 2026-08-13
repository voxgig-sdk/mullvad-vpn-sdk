<?php
declare(strict_types=1);

// MullvadVpn SDK configuration

class MullvadVpnConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "MullvadVpn",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://ipv4.am.i.mullvad.net",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "ip_information" => [],
                ],
            ],
            "entity" => [
        'ip_information' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'blacklisted',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'results',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
          ],
          'name' => 'ip_information',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/json',
                  'parts' => [
                    'json',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.blacklisted`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return MullvadVpnFeatures::make_feature($name);
    }
}
