

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { MullvadVpnSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('IpInformationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when MULLVAD_VPN_TEST_LIVE=TRUE.
  afterEach(liveDelay('MULLVAD_VPN_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = MullvadVpnSDK.test()
    const ent = testsdk.IpInformation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.MULLVAD_VPN_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ip_information.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"blacklisted":{"a":true,"h":"Blacklisted","n":"blacklisted","r":false,"sh":"Information about blacklist status","t":"`$OBJECT`","key$":"blacklisted","index$":0},"city":{"a":true,"h":"City","n":"city","r":false,"sh":"City of the IP location","t":"`$STRING`","key$":"city","index$":1},"country":{"a":true,"h":"Country","n":"country","r":false,"sh":"Country code of the IP location","t":"`$STRING`","key$":"country","index$":2},"ip":{"a":true,"h":"Ip","n":"ip","r":false,"sh":"The current IP address","t":"`$STRING`","key$":"ip","index$":3},"latitude":{"a":true,"fo":"float","h":"Latitude","n":"latitude","r":false,"sh":"Latitude coordinate of the IP location","t":"`$NUMBER`","key$":"latitude","index$":4},"longitude":{"a":true,"fo":"float","h":"Longitude","n":"longitude","r":false,"sh":"Longitude coordinate of the IP location","t":"`$NUMBER`","key$":"longitude","index$":5},"mullvad_exit_ip":{"a":true,"h":"Mullvad Exit Ip","n":"mullvad_exit_ip","r":false,"sh":"Indicates if the IP is a Mullvad exit IP","t":"`$BOOLEAN`","key$":"mullvad_exit_ip","index$":6},"mullvad_exit_ip_hostname":{"a":true,"h":"Mullvad Exit Ip Hostname","n":"mullvad_exit_ip_hostname","r":false,"sh":"Hostname of the Mullvad exit server","t":"`$STRING`","key$":"mullvad_exit_ip_hostname","index$":7},"mullvad_server_type":{"a":true,"h":"Mullvad Server Type","n":"mullvad_server_type","r":false,"sh":"Type of Mullvad server","t":"`$STRING`","key$":"mullvad_server_type","index$":8},"organization":{"a":true,"h":"Organization","n":"organization","r":false,"sh":"Organization associated with the IP","t":"`$STRING`","key$":"organization","index$":9}},"name":"ip_information","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/json","q":{},"r":{},"s":[{"lit":"json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"ip_information","name__orig":"ip_information","Name":"IpInformation","name_":"ip_information","name-":"ip-information","NAME":"IP_INFORMATION","index$":0}, {"active":true,"entity":"ip_information","key$":"BasicIpInformationFlow","kind":"basic","name":"BasicIpInformationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ip_information_ref01","srcdatavar":"ip_information_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ip_information_ref01"}}],"index$":0}]}, 'IpInformation', {"GET /json":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ip_information_ref01_data = Object.values(setup.data.existing.ip_information)[0] as any

    // LOAD
    const ip_information_ref01_ent = client.IpInformation()
    const ip_information_ref01_match_dt0: any = {}
    const ip_information_ref01_data_dt0 = (await ip_information_ref01_ent.load(ip_information_ref01_match_dt0)).data()
    assert(null != ip_information_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ip_information/IpInformationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = MullvadVpnSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['ip_information01','ip_information02','ip_information03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'MULLVAD_VPN_TEST_IP_INFORMATION_ENTID': idmap,
    'MULLVAD_VPN_TEST_LIVE': 'FALSE',
    'MULLVAD_VPN_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['MULLVAD_VPN_TEST_IP_INFORMATION_ENTID']

  const live = 'TRUE' === env.MULLVAD_VPN_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['MULLVAD_VPN_TEST_IP_INFORMATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new MullvadVpnSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
