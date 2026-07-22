# MullvadVpn SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MullvadVpnUtility.registrar = ->(u) {
  u.clean = MullvadVpnUtilities::Clean
  u.done = MullvadVpnUtilities::Done
  u.make_error = MullvadVpnUtilities::MakeError
  u.feature_add = MullvadVpnUtilities::FeatureAdd
  u.feature_hook = MullvadVpnUtilities::FeatureHook
  u.feature_init = MullvadVpnUtilities::FeatureInit
  u.fetcher = MullvadVpnUtilities::Fetcher
  u.make_fetch_def = MullvadVpnUtilities::MakeFetchDef
  u.make_context = MullvadVpnUtilities::MakeContext
  u.make_options = MullvadVpnUtilities::MakeOptions
  u.make_request = MullvadVpnUtilities::MakeRequest
  u.make_response = MullvadVpnUtilities::MakeResponse
  u.make_result = MullvadVpnUtilities::MakeResult
  u.make_point = MullvadVpnUtilities::MakePoint
  u.make_spec = MullvadVpnUtilities::MakeSpec
  u.make_url = MullvadVpnUtilities::MakeUrl
  u.param = MullvadVpnUtilities::Param
  u.prepare_auth = MullvadVpnUtilities::PrepareAuth
  u.prepare_body = MullvadVpnUtilities::PrepareBody
  u.prepare_headers = MullvadVpnUtilities::PrepareHeaders
  u.prepare_method = MullvadVpnUtilities::PrepareMethod
  u.prepare_params = MullvadVpnUtilities::PrepareParams
  u.prepare_path = MullvadVpnUtilities::PreparePath
  u.prepare_query = MullvadVpnUtilities::PrepareQuery
  u.result_basic = MullvadVpnUtilities::ResultBasic
  u.result_body = MullvadVpnUtilities::ResultBody
  u.result_headers = MullvadVpnUtilities::ResultHeaders
  u.transform_request = MullvadVpnUtilities::TransformRequest
  u.transform_response = MullvadVpnUtilities::TransformResponse
}
