// Typed models for the MullvadVpn SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface IpInformation {
  blacklisted?: Record<string, any>
  city?: string
  country?: string
  ip?: string
  latitude?: number
  longitude?: number
  mullvad_exit_ip?: boolean
  mullvad_exit_ip_hostname?: string
  mullvad_server_type?: string
  organization?: string
}

export interface IpInformationLoadMatch {
  blacklisted?: Record<string, any>
  city?: string
  country?: string
  ip?: string
  latitude?: number
  longitude?: number
  mullvad_exit_ip?: boolean
  mullvad_exit_ip_hostname?: string
  mullvad_server_type?: string
  organization?: string
}

