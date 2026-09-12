import { MullvadVpnEntityBase } from '../MullvadVpnEntityBase';
import type { MullvadVpnSDK } from '../MullvadVpnSDK';
import type { Control } from '../types';
import type { IpInformation, IpInformationLoadMatch } from '../MullvadVpnTypes';
declare class IpInformationEntity extends MullvadVpnEntityBase<IpInformation> {
    constructor(client: MullvadVpnSDK, entopts: any);
    make(this: IpInformationEntity): IpInformationEntity;
    load(this: any, reqmatch?: IpInformationLoadMatch, ctrl?: Control): Promise<IpInformationEntity>;
}
export { IpInformationEntity };
