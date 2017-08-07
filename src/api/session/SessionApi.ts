import * as Rx from 'rxjs';
import * as Common from '../common';
import {  SessionResponseAction } from './actions';

export interface SessionApi {
    get: () => Rx.Observable<SessionResponseAction | Common.ErrorAction>;
    signin: () => void;
    signout: () => void;
}