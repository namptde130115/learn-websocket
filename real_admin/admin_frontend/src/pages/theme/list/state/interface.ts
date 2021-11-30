export interface IStateThemes {
    loading: boolean;
    themes: any[];
    page?: number;
    pageSize?: number;
    totalItems?: number;
    search?: string;
}

export interface IActionThemes {
    type: string;
    payload?: any;
}

export interface IContextThemes {
    state: IStateThemes;
    dispatch: React.Dispatch<any>;
}
