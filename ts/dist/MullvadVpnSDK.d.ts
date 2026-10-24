import { IpInformationEntity } from './entity/IpInformationEntity';
export type * from './MullvadVpnTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { MullvadVpnEntityBase } from './MullvadVpnEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class MullvadVpnSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    IpInformation(entopts?: Record<string, any>): IpInformationEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): MullvadVpnSDK;
    tester(testopts?: any, sdkopts?: any): MullvadVpnSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof MullvadVpnSDK;
export { stdutil, config, BaseFeature, MullvadVpnEntityBase, MullvadVpnSDK, SDK, };
export type { DirectResult };
