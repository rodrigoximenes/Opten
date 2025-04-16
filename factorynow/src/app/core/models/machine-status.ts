export interface MachineStatus {
    id: string;
    name: string;
    operational: boolean;
    producedParts: number;
    performance: number;
    activeErrors: string[];
}
