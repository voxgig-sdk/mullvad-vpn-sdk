package voxgigmullvadvpnsdk

import (
	"github.com/voxgig-sdk/mullvad-vpn-sdk/go/core"
	"github.com/voxgig-sdk/mullvad-vpn-sdk/go/entity"
	"github.com/voxgig-sdk/mullvad-vpn-sdk/go/feature"
	_ "github.com/voxgig-sdk/mullvad-vpn-sdk/go/utility"
)

// Type aliases preserve external API.
type MullvadVpnSDK = core.MullvadVpnSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MullvadVpnEntity = core.MullvadVpnEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type MullvadVpnError = core.MullvadVpnError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewIpInformationEntityFunc = func(client *core.MullvadVpnSDK, entopts map[string]any) core.MullvadVpnEntity {
		return entity.NewIpInformationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMullvadVpnSDK = core.NewMullvadVpnSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewMullvadVpnSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *MullvadVpnSDK  { return NewMullvadVpnSDK(nil) }
func Test() *MullvadVpnSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
