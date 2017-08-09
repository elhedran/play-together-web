import * as Common from '../../common';
import { SessionResponse } from './contract';

export const scope = '@play-together/api/session';

export type BaseAction = {
    scope: '@play-together/api/session';
};

export enum ActionType {
    Response
}

export type SessionResponseAction = BaseAction & {
    type: ActionType.Response;
    response: SessionResponse;
};

export type ErrorAction = Common.ErrorAction;

export type Action = ErrorAction | SessionResponseAction;

export const creators = {
    response: (response: SessionResponse): SessionResponseAction => ({ scope, type: ActionType.Response, response }),
    ...Common.creators
};

export const filters = {
    isResponse: (action: any): action is SessionResponseAction =>
        action.type === ActionType.Response && action.scope === scope,
    ...Common.filters
};