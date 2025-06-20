import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./features/store";
import SkipsPage from "./pages/SkipsPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SkipsPage />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
