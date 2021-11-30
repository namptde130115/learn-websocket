export interface IStateUsers {
    loading: boolean;
    users: any[];
    page?: number;
    pageSize?: number;
    totalItems?: number;
    search?: string;
}

export interface IActionUsers {
    type: string;
    payload?: any;
}

export interface IContextUsers {
    state: IStateUsers;
    dispatch: React.Dispatch<any>;
}
