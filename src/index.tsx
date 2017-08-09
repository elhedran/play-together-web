import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'rxjs-dew-react';

import * as Session from './store/session';
import { StubSessionApi } from './api/session/stub';

// create once on load

ReactDOM.render(
  <Provider store={Session.createStore(new StubSessionApi())}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
