export interface IpInformation {
    blacklisted?: Record<string, any>;
    city?: string;
    country?: string;
    ip?: string;
    latitude?: number;
    longitude?: number;
    mullvad_exit_ip?: boolean;
    mullvad_exit_ip_hostname?: string;
    mullvad_server_type?: string;
    organization?: string;
}
export interface IpInformationLoadMatch {
    blacklisted?: Record<string, any>;
    city?: string;
    country?: string;
    ip?: string;
    latitude?: number;
    longitude?: number;
    mullvad_exit_ip?: boolean;
    mullvad_exit_ip_hostname?: string;
    mullvad_server_type?: string;
    organization?: string;
}
