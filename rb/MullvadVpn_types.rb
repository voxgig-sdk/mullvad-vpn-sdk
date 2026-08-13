# frozen_string_literal: true

# Typed models for the MullvadVpn SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# IpInformation entity data model.
#
# @!attribute [rw] blacklisted
#   @return [Boolean, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
IpInformation = Struct.new(
  :blacklisted,
  :results,
  keyword_init: true
)

# Request payload for IpInformation#load.
#
# @!attribute [rw] blacklisted
#   @return [Boolean, nil]
#
# @!attribute [rw] results
#   @return [Array, nil]
IpInformationLoadMatch = Struct.new(
  :blacklisted,
  :results,
  keyword_init: true
)

