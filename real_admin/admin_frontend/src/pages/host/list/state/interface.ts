export interface IStateHosts {
    loading: boolean;
    hosts: any[];
    page?: number;
    pageSize?: number;
    totalItems?: number;
    search?: string;
}

export interface IActionHosts {
    type: string;
    payload?: any;
}

export interface IContextHosts {
    state: IStateHosts;
    dispatch: React.Dispatch<any>;
}
