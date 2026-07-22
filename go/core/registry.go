package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewIpInformationEntityFunc func(client *MullvadVpnSDK, entopts map[string]any) MullvadVpnEntity

