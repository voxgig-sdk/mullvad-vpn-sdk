"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('IpInformationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MULLVAD_VPN_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MULLVAD_VPN_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MullvadVpnSDK.test();
        const ent = testsdk.IpInformation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MULLVAD_VPN_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ip_information.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "blacklisted": { "a": true, "h": "Blacklisted", "n": "blacklisted", "r": false, "t": "`$BOOLEAN`", "key$": "blacklisted", "index$": 0 }, "results": { "a": true, "h": "Results", "n": "results", "r": false, "t": "`$ARRAY`", "key$": "results", "index$": 1 } }, "name": "ip_information", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/json", "q": {}, "r": {}, "s": [{ "lit": "json" }], "t": { "req": "`reqdata`", "res": "`body.blacklisted`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "ip_information", "name__orig": "ip_information", "Name": "IpInformation", "name_": "ip_information", "name-": "ip-information", "NAME": "IP_INFORMATION", "index$": 0 }, { "active": true, "entity": "ip_information", "key$": "BasicIpInformationFlow", "kind": "basic", "name": "BasicIpInformationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ip_information_ref01", "srcdatavar": "ip_information_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ip_information_ref01" } }], "index$": 0 }] }, 'IpInformation', { "GET /json": { "protocol": "http", "operationId": "getMyIp", "responses": { "200": { "description": "Successful response with IP information", "content": { "application/json": { "schema": { "type": "object", "properties": { "ip": { "description": "The current IP address", "example": "192.0.2.1", "key$": "ip", "type": "string" }, "country": { "description": "Country code of the IP location", "example": "SE", "key$": "country", "type": "string" }, "city": { "description": "City of the IP location", "example": "Gothenburg", "key$": "city", "type": "string" }, "latitude": { "description": "Latitude coordinate of the IP location", "example": 57.7089, "format": "float", "key$": "latitude", "type": "number" }, "longitude": { "description": "Longitude coordinate of the IP location", "example": 11.9746, "format": "float", "key$": "longitude", "type": "number" }, "mullvad_exit_ip": { "description": "Indicates if the IP is a Mullvad exit IP", "example": true, "key$": "mullvad_exit_ip", "type": "boolean" }, "mullvad_exit_ip_hostname": { "description": "Hostname of the Mullvad exit server", "example": "se-got-wg-001", "key$": "mullvad_exit_ip_hostname", "type": "string" }, "mullvad_server_type": { "description": "Type of Mullvad server", "example": "wireguard", "key$": "mullvad_server_type", "type": "string" }, "blacklisted": { "description": "Information about blacklist status", "key$": "blacklisted", "properties": { "blacklisted": { "example": false, "type": "boolean", "key$": "blacklisted" }, "results": { "items": { "type": "object" }, "type": "array", "key$": "results" } }, "type": "object", "index$": 0 }, "organization": { "description": "Organization associated with the IP", "example": "Mullvad VPN", "key$": "organization", "type": "string" } } } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Internal server error" } } } } } }, "503": { "description": "Service unavailable", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Service temporarily unavailable" } } } } } } }, "parameters": [], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let ip_information_ref01_data = Object.values(setup.data.existing.ip_information)[0];
        // LOAD
        const ip_information_ref01_ent = client.IpInformation();
        const ip_information_ref01_match_dt0 = {};
        const ip_information_ref01_data_dt0 = (await ip_information_ref01_ent.load(ip_information_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != ip_information_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ip_information/IpInformationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MullvadVpnSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ip_information01', 'ip_information02', 'ip_information03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MULLVAD_VPN_TEST_IP_INFORMATION_ENTID': idmap,
        'MULLVAD_VPN_TEST_LIVE': 'FALSE',
        'MULLVAD_VPN_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['MULLVAD_VPN_TEST_IP_INFORMATION_ENTID'];
    const live = 'TRUE' === env.MULLVAD_VPN_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MULLVAD_VPN_TEST_IP_INFORMATION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.MullvadVpnSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.MULLVAD_VPN_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=IpInformationEntity.test.js.map