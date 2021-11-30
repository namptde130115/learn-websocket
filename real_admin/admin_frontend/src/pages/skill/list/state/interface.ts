export interface IStateSkills {
    loading: boolean;
    skills: any[];
    page?: number;
    pageSize?: number;
    totalItems?: number;
    search?: string;
}

export interface IActionSkills {
    type: string;
    payload?: any;
}

export interface IContextSkills {
    state: IStateSkills;
    dispatch: React.Dispatch<any>;
}
