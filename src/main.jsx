import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";

import { queryClient } from "./app/queryClient";
import { LanguageProvider } from "./context/LanguageProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
       <BrowserRouter>
    <App />
       </BrowserRouter>
      </LanguageProvider>
    </QueryClientProvider>

  </React.StrictMode>
);

