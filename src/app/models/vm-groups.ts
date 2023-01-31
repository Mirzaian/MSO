
// Interface for chapters view with developer teams
export interface vmGroups {
    id: number;
    name: string;
    category: number;
    children: Array<vmGroups>
}

// Interface for the modal view of the servers
export interface vmServer {
    id: number;
    status: boolean;
    name: string;
    category: number;
    img: string;
    serverDetails: serverDetails;
    application: Array<serverApplications>;
}

// Interface furhter of 'vmServer' with the system and network infos
// Also added the maintance and serverstart type
export interface serverDetails {
    os: string;
    processor: string;
    memory: number;
    hdStorage: number;
    ipv4: string;
    ipv6: string;
    location: string;
    btnMaintenance: boolean;
    btnStart: boolean;

}

// Interface further of 'vmServer' with the attributes of serverApplications
//Also added actions for applications
export interface serverApplications {
    name: string;
    status: string;
    cpu: string;
    memory: string;
    action: {
        status: boolean;
        start: boolean;
        update: boolean;
        shutdown: boolean;
    }
}
