
export interface IDataTableOptions{
    widgetId : string;
    title : string;
    columns : IColumns[];
    editButton: boolean;
    addButton: boolean;
    data: any[];

    onRefresh(): void;
    onCRUDButtons(string :string[]): void;
}

export interface IColumns{
    name: string;
    width: string;
    field: string;
    visibled: boolean;
}
