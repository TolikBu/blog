import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "antd/dist/antd.min.css";
import "./index.css";

import App from "./components/App/App";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
