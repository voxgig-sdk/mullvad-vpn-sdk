import { Context } from './Context';
declare class MullvadVpnError extends Error {
    isMullvadVpnError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { MullvadVpnError };
