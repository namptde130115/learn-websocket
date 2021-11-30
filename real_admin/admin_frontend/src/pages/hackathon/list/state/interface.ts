export interface IStateHackathons {
    loading: boolean;
    hackathons: any[];
    page?: number;
    pageSize?: number;
    totalItems?: number;
    search?: string;
    status?: any;
}

export interface IActionHackathons {
    type: string;
    payload?: any;
}

export interface IContextHackathons {
    state: IStateHackathons;
    dispatch: React.Dispatch<any>;
}
