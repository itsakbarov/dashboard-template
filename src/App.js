import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {persist, store} from "./services/store";
import "./assets/sass/main.scss";
import AppRoutes from "./routes/routes";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persist}>
                    <BrowserRouter>
                        <AppRoutes/>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
