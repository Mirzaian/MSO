
export interface vmGroups {
    id: number;
    name: string;
    category: number;
    children: Array<vmGroups>
}
export interface vmServer {
    id: number;
    name: string;
    category: number;
    img: string;
    serverDetails: serverDetails;
    application: Array<serverApplications>;
}

export interface serverDetails {
    os: string;
    processor: string;
    memory: number;
    hdStorage: number;
    ipv4: string;
    ipv6: string;
    location: string;
}

export interface serverApplications {
    name: string;
    status: string;
    cpu: string|undefined;
    memory: string;
}

export interface vmEntry {
    id: number;
    name: string;
    status: string;
    applications: string;
    uptime: number;
}