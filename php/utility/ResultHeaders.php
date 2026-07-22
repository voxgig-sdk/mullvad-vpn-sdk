<?php
declare(strict_types=1);

// MullvadVpn SDK utility: result_headers

class MullvadVpnResultHeaders
{
    public static function call(MullvadVpnContext $ctx): ?MullvadVpnResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
