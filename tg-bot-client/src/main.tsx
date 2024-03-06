import ReactDOM from "react-dom/client";
import {
  SDKProvider,
  DisplayGate,
  type SDKInitOptions,
} from "@tma.js/sdk-react";

import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import "./index.css";

const options: SDKInitOptions = {
  acceptCustomStyles: true,
  cssVars: true,
};

interface SDKProviderErrorProps {
  error: unknown;
}

function SDKProviderError({ error }: SDKProviderErrorProps) {
  return (
    <div>
      Oops. Something went wrong.
      <blockquote>
        <code>
          {error instanceof Error ? error.message : JSON.stringify(error)}
        </code>
      </blockquote>
    </div>
  );
}

function SDKProviderLoading() {
  return <div>SDK is loading.</div>;
}

function SDKInitialState() {
  return <div>Waiting for initialization to start.</div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SDKProvider options={options}>
      <DisplayGate
        error={SDKProviderError}
        loading={SDKProviderLoading}
        initial={SDKInitialState}
      >
        <App />
      </DisplayGate>
    </SDKProvider>
  </BrowserRouter>
);
