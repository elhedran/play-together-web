
export const scope = '@play-together/api';

export type BaseAction = {
    scope: '@play-together/api';
};

export enum ActionType {
    Error,
}

export type ErrorAction = BaseAction & {
    type: ActionType.Error;
    message: string;
};

export const actionCreators = {
    error: (message: string): ErrorAction => ({type: ActionType.Error, scope, message})
};