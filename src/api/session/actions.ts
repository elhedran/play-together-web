import * as Common from '../common';
import { SessionResponse } from './contract';

export const scope = '@play-together/api/session';

export type BaseAction = {
    scope: '@play-together/api/session';
};

export enum ActionType {
    Response
}

export type SessionResponseAction = BaseAction & SessionResponse & {
    type: ActionType.Response;
};

export type Action = Common.ErrorAction | SessionResponseAction;

export const isAction = (action: any): action is Action =>
    action.scope === scope;
export const isResponseAction = (action: Action): action is SessionResponseAction =>
    action.type === ActionType.Response;

export const actionCreators = {
    response: (response: SessionResponse): SessionResponseAction => ({scope, type: ActionType.Response, ...response})
};