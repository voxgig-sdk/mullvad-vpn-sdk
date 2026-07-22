<?php
declare(strict_types=1);

// MullvadVpn SDK utility: prepare_body

class MullvadVpnPrepareBody
{
    public static function call(MullvadVpnContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
