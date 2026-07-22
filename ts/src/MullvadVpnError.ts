
import { Context } from './Context'


class MullvadVpnError extends Error {

  isMullvadVpnError = true

  sdk = 'MullvadVpn'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  MullvadVpnError
}

