import * as Api from '../../api/session';

const scope = '@play-together/store/session';

export type BaseAction = {
    scope: '@play-together/store/session';
};

export enum ActionType {
    SignIn,
    SignOut,
    Refresh
}

export type SignInAction = BaseAction & {
    type: ActionType.SignIn;
};

export type SignOutAction = BaseAction & {
    type: ActionType.SignOut;
};

export type Action = SignInAction | SignOutAction | Api.Action;

export const isAction = (action: any): action is Action =>
    Api.isAction(action) || action.scope === scope;

export const isSignInAction = (action: Action): action is SignInAction =>
    action.scope === scope && action.type === ActionType.SignIn;
export const isSignOutAction = (action: Action): action is SignOutAction =>
    action.scope === scope && action.type === ActionType.SignOut;

export const actionCreators = {
    signIn: (): SignInAction => ({scope, type: ActionType.SignIn }),
    signOut: (): SignOutAction => ({scope, type: ActionType.SignOut })
};