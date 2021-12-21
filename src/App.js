import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./services/store";
import "./assets/sass/main.scss";
import {store} from './services/store'
import AppRoutes from "./routes/routes";
function App() {
  return (
    <div className="App">
   <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
           <BrowserRouter>
               <AppRoutes />
           </BrowserRouter>
       </PersistGate>
   </Provider>
    </div>
  );
}

export default App;
