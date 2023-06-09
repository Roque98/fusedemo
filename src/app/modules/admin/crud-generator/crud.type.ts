import { List } from "lodash";

export interface Crud {
    id: string;
    nameTable: string;
    description: string;
    items: CrudItems[];
    title: string;
}

export interface CrudItems {
    id: string;
    crudId: string;
    name: string;
    description: string;
    dataType: string;
}

export interface RespuestaHttp {
    error: boolean;
    message: string;
    result: any
}

export interface FilterQuery {
    field: string;
    operator: string;
    value: string;
}

export interface BodySelect
{
    filtersQuery: FilterQuery[];
}