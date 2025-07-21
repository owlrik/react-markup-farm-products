import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/app/App";
import {ThemeProvider} from "styled-components";
import {createDefaultTheme} from "./theme/default";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={createDefaultTheme()}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
