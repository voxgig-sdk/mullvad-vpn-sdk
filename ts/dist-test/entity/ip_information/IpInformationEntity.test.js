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
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.MullvadVpnSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.IpInformation().load({ "city": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MULLVAD_VPN_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ip_information.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "blacklisted": { "a": true, "h": "Blacklisted", "n": "blacklisted", "r": false, "sh": "Information about blacklist status", "t": "`$OBJECT`", "key$": "blacklisted", "index$": 0 }, "city": { "a": true, "h": "City", "n": "city", "r": false, "sh": "City of the IP location", "t": "`$STRING`", "key$": "city", "index$": 1 }, "country": { "a": true, "h": "Country", "n": "country", "r": false, "sh": "Country code of the IP location", "t": "`$STRING`", "key$": "country", "index$": 2 }, "ip": { "a": true, "h": "Ip", "n": "ip", "r": false, "sh": "The current IP address", "t": "`$STRING`", "key$": "ip", "index$": 3 }, "latitude": { "a": true, "fo": "float", "h": "Latitude", "n": "latitude", "r": false, "sh": "Latitude coordinate of the IP location", "t": "`$NUMBER`", "key$": "latitude", "index$": 4 }, "longitude": { "a": true, "fo": "float", "h": "Longitude", "n": "longitude", "r": false, "sh": "Longitude coordinate of the IP location", "t": "`$NUMBER`", "key$": "longitude", "index$": 5 }, "mullvad_exit_ip": { "a": true, "h": "Mullvad Exit Ip", "n": "mullvad_exit_ip", "r": false, "sh": "Indicates if the IP is a Mullvad exit IP", "t": "`$BOOLEAN`", "key$": "mullvad_exit_ip", "index$": 6 }, "mullvad_exit_ip_hostname": { "a": true, "h": "Mullvad Exit Ip Hostname", "n": "mullvad_exit_ip_hostname", "r": false, "sh": "Hostname of the Mullvad exit server", "t": "`$STRING`", "key$": "mullvad_exit_ip_hostname", "index$": 7 }, "mullvad_server_type": { "a": true, "h": "Mullvad Server Type", "n": "mullvad_server_type", "r": false, "sh": "Type of Mullvad server", "t": "`$STRING`", "key$": "mullvad_server_type", "index$": 8 }, "organization": { "a": true, "h": "Organization", "n": "organization", "r": false, "sh": "Organization associated with the IP", "t": "`$STRING`", "key$": "organization", "index$": 9 } }, "name": "ip_information", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /json", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/json", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "ip_information", "name__orig": "ip_information", "Name": "IpInformation", "name_": "ip_information", "name-": "ip-information", "NAME": "IP_INFORMATION", "index$": 0 }, { "active": true, "entity": "ip_information", "key$": "BasicIpInformationFlow", "kind": "basic", "name": "BasicIpInformationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ip_information_ref01", "srcdatavar": "ip_information_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ip_information_ref01" } }], "index$": 0 }] }, 'IpInformation', { "GET /json": { "protocol": "http", "parameters": [] } }, { strict: LIVE_STRICT, t });
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
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
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