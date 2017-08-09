import * as React from 'react';
import * as Dew from 'rxjs-dew-react';
import * as Session from '../../store/session';

export class Login extends Dew.Component<{}, Session.State, Session.State, Session.Action> {
    state = Session.initialState;

    actions = this.bindActions(Session.actionCreators);

    applyStoreState(state: Session.State) {
        this.setState(state);
    }

    render() {
        if (this.state.userName) {
            return (
                <div>
                    <div>User: {this.state.userName}</div>
                    <div onClick={this.actions.signOut}>Sign Out</div>
                </div>
            );
        }
        return (
            <div>
                <div onClick={this.actions.signIn}>Sign In</div>
            </div>
        );
    }
}

export default Login;