import * as Rx from 'rxjs';
import { ErrorAction, SessionResponseAction } from './actions';

export interface SessionApi {
    get: () => Rx.Observable<SessionResponseAction | ErrorAction>;
    signin: () => Rx.Observable<SessionResponseAction | ErrorAction>;
    signout: () => Rx.Observable<SessionResponseAction | ErrorAction>;
}