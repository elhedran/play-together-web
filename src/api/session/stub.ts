import { SessionApi } from './SessionApi';
import { actionCreators } from './actions';
import { SessionResponse } from './contract';
import * as Rx from 'rxjs';

export class StubSessionApi implements SessionApi {

    status: SessionResponse = {
        isValid: false,
        isAnonymous: false
    };

    get() {
        return Rx.Observable.of(
            actionCreators.response(this.status)
        ).delay(1000);
    }

    signin() {
        this.status.isValid = true;
        this.status.userName = 'Ian';
        return Rx.Observable.of(
            actionCreators.response(this.status)
        ).delay(1000);
    }

    signout() {
        this.status.isValid = false;
        this.status.userName = undefined;
        return Rx.Observable.of(
            actionCreators.response(this.status)
        ).delay(1000);
    }
}