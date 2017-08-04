import * as Rx from 'rxjs';
import { ErrorAction, SessionResponseAction } from './Actions';

export interface SessionApi {
    get: () => Rx.Observable<SessionResponseAction | ErrorAction>;
    signin: () => void;
    signout: () => void;
}