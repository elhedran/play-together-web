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

export type Action = Common.ErrorAction | SessionResponseAction;

export const isAction = (action: any): action is Action =>
    Common.isErrorAction(action) || action.scope === scope;

export const isResponseAction = (action: Action): action is SessionResponseAction =>
    action.type === ActionType.Response && action.scope === scope;
export const isErrorAction = Common.isErrorAction;

export const actionCreators = {
    response: (response: SessionResponse): SessionResponseAction => ({scope, type: ActionType.Response, response}),
    error: Common.actionCreators.error
};