import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import { store } from "./store.ts";
import { FeedBackProvider } from "./contexts/FeedbackContext.tsx";
// import { FeedBackProvider } from "./contexts/FeedBackContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FeedBackProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </FeedBackProvider>
  </StrictMode>,
);
