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
#   @return [Hash, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] mullvad_exit_ip
#   @return [Boolean, nil]
#
# @!attribute [rw] mullvad_exit_ip_hostname
#   @return [String, nil]
#
# @!attribute [rw] mullvad_server_type
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [String, nil]
IpInformation = Struct.new(
  :blacklisted,
  :city,
  :country,
  :ip,
  :latitude,
  :longitude,
  :mullvad_exit_ip,
  :mullvad_exit_ip_hostname,
  :mullvad_server_type,
  :organization,
  keyword_init: true
)

# Request payload for IpInformation#load.
#
# @!attribute [rw] blacklisted
#   @return [Hash, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] ip
#   @return [String, nil]
#
# @!attribute [rw] latitude
#   @return [Float, nil]
#
# @!attribute [rw] longitude
#   @return [Float, nil]
#
# @!attribute [rw] mullvad_exit_ip
#   @return [Boolean, nil]
#
# @!attribute [rw] mullvad_exit_ip_hostname
#   @return [String, nil]
#
# @!attribute [rw] mullvad_server_type
#   @return [String, nil]
#
# @!attribute [rw] organization
#   @return [String, nil]
IpInformationLoadMatch = Struct.new(
  :blacklisted,
  :city,
  :country,
  :ip,
  :latitude,
  :longitude,
  :mullvad_exit_ip,
  :mullvad_exit_ip_hostname,
  :mullvad_server_type,
  :organization,
  keyword_init: true
)

