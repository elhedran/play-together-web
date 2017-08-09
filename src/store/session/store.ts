import * as Dew from 'rxjs-dew';
import * as Api from '../../api/session';
import * as Rx from 'rxjs';
import { State, initialState } from './state';
import { Action, filters } from './actions';

export const soak: Dew.Soak<State, Action> = (state, action) => {
    if (filters.isResponse(action)) {
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
            ins$.filter(filters.isSignIn)
                .mergeMap(() => api.signin()),
            ins$.filter(filters.isSignOut)
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