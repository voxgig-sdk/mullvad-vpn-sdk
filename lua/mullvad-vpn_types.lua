-- Typed models for the MullvadVpn SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class IpInformation
---@field blacklisted? table
---@field city? string
---@field country? string
---@field ip? string
---@field latitude? number
---@field longitude? number
---@field mullvad_exit_ip? boolean
---@field mullvad_exit_ip_hostname? string
---@field mullvad_server_type? string
---@field organization? string

---@class IpInformationLoadMatch
---@field blacklisted? table
---@field city? string
---@field country? string
---@field ip? string
---@field latitude? number
---@field longitude? number
---@field mullvad_exit_ip? boolean
---@field mullvad_exit_ip_hostname? string
---@field mullvad_server_type? string
---@field organization? string

local M = {}

return M
