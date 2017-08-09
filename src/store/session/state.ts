import * as Api from '../../api/session';

export type State = Api.SessionResponse;

export const initialState: State = {
    isValid: false,
    isAnonymous: false,
};