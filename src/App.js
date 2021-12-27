import {Provider, useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {persist, store} from "./services/store";
import "./assets/sass/main.scss";
import AppRoutes from "./routes/routes";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

function App() {
    const {i18n} = useTranslation();
    const {language} = useSelector((state) => ({
        language: state.system.language,
    }));

    useEffect(() => {
        language && i18n.changeLanguage(language);
    }, [language]);

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
