import * as Dew from 'rxjs-dew';
import * as Api from '../../api/session';
import * as Rx from 'rxjs';
import { State, initialState } from './state';
import { Action, isSignInAction, isSignOutAction } from './actions';

export const soak: Dew.Soak<State, Action> = (state, action) => {
    if (Api.isAction(action) && Api.isResponseAction(action)) {
        return { ...action.response };
    }
    return state;
};

export const createFlow = (api: Api.SessionApi): Dew.Flow<Action> =>
    (in$) => {
        const ins$ = in$.share();
        return Rx.Observable.merge(
            ins$,
            // get user inßformation once on refresh.
            api.get(),
            ins$.filter(isSignInAction)
                .mergeMap(() => api.signin()),
            ins$.filter(isSignOutAction)
                .mergeMap(() => api.signout())
        );
    };

export const createStore = (api: Api.SessionApi): Dew.Store<State, Action> =>
    Dew.createStore(
        createFlow(api),
        soak,
        initialState
    );

export const storeKey = 'session';

export const createStoreMap = (api: Api.SessionApi) => ({
    [storeKey]: createStore(api)
});