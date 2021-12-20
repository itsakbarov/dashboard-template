import { Provider } from "react-redux";
import { BrowserRouter, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import DashboardLayout from "./layout/DashboardLayout";
import { persistor } from "./services/store";
import "./assets/sass/main.scss";
import AppRoutes from "./routes/routes";
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
