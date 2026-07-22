package core

type MullvadVpnError struct {
	IsMullvadVpnError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewMullvadVpnError(code string, msg string, ctx *Context) *MullvadVpnError {
	return &MullvadVpnError{
		IsMullvadVpnError: true,
		Sdk:              "MullvadVpn",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *MullvadVpnError) Error() string {
	return e.Msg
}
