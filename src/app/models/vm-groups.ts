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
}
export interface vmEntry {
    id: number;
    name: string;
    status: string;
    applications: string;
    uptime: number;
}