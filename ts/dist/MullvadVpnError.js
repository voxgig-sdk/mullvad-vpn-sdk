"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MullvadVpnError = void 0;
class MullvadVpnError extends Error {
    isMullvadVpnError = true;
    sdk = 'MullvadVpn';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.MullvadVpnError = MullvadVpnError;
//# sourceMappingURL=MullvadVpnError.js.map