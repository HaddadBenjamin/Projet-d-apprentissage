import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FilterableProductTable from "./components/Products/FilterableProductTable";
import Counter from "./components/Counter";
import ControledAndUncontroledFields from "./components/ControledAndUncontroledFields";
import MyContextConsumer, {initialUserState, UserContext} from "./components/PlayWithContext";

ReactDOM.render(
  <React.StrictMode>
      <UserContext.Provider value={initialUserState}>
          <Counter initialValue={5}/>
          <ControledAndUncontroledFields />
          <MyContextConsumer/>
          <FilterableProductTable/>,
      </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
