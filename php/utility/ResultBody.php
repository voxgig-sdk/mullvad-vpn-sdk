<?php
declare(strict_types=1);

// MullvadVpn SDK utility: result_body

class MullvadVpnResultBody
{
    public static function call(MullvadVpnContext $ctx): ?MullvadVpnResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
