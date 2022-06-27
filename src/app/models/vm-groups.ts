export interface vmGroups {
    id: number;
    name: string;
    children: Array<vmGroups>
}
export interface vmEntry {
    id: number;
    name: string;
    status: string;
    applications: string;
    uptime: number;
}