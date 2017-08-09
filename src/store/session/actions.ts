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

export const actionCreators = {
    signIn: (): SignInAction => ({ scope, type: ActionType.SignIn }),
    signOut: (): SignOutAction => ({ scope, type: ActionType.SignOut }),
    ...Api.actionCreators
};

export const actionFilters = {
    isSignIn: (action: any): action is SignInAction =>
        action.scope === scope && action.type === ActionType.SignIn,
    isSignOut: (action: any): action is SignOutAction =>
        action.scope === scope && action.type === ActionType.SignOut,
    ...Api.actionFilters
};