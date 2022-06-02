import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getUsers } from "./actions/users.action";

//dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import { getPosts } from "./actions/post.action";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
store.dispatch(getUsers());
store.dispatch(getPosts());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
