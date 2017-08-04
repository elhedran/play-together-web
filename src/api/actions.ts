export const scope = '@play-together/api';

export type BaseAction = {
    scope: '@play-together/api';
};
export enum ActionType {
    Error,
    SessionResponse
}

export type ErrorAction = BaseAction & {
    type: ActionType.Error;
    message: string;
};

export type SessionResponseAction = BaseAction & {
    type: ActionType.SessionResponse;
    IsValid: boolean;
    IsAnonymous: boolean;
    Roles?: string[];
    UserName?: string;
};

export type Action = ErrorAction | SessionResponseAction;

export const isAction = (action: any): action is Action => action.scope === scope;