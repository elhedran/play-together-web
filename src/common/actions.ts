
export const scope = '@play-together/common';

export type BaseAction = {
    scope: '@play-together/common';
};

export enum ActionType {
    Error,
}

export type ErrorAction = BaseAction & {
    type: ActionType.Error;
    message: string;
};

export type Action = ErrorAction;

export const actionCreators = {
    error: (message: string): ErrorAction => ({ type: ActionType.Error, scope, message })
};

export const actionFilters = {
    isError: (action: any): action is ErrorAction =>
        action.scope === scope && action.type === ActionType.Error
};