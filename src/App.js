import { Provider } from "react-redux";
import { BrowserRouter, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import AppRoutes from "./routes/routes";
import { persistor } from "./services/store";
function App() {
  return (
    <div className="App">
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
      </PersistGate>
    </div>
  );
}

export default App;
