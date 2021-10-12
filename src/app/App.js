import {Provider} from "react-redux";
import {Store} from './redux/Store'
import AppContext from './context/AppContext'
import {BrowserRouter, Router,Route, Switch} from 'react-router-dom'
import {ToastContainer} from "react-toastify";
import history from "../history";
import routes from './RootRoutes'
import LoginPage from "./views/Login";
import AuthGuard from "./Auth/AuthGuard";
import {AuthProvider} from "./context/JWTAuthContext";
import Layout from "./views/Layout/Layout";

export default function App() {

    return (
        <>
            <AppContext.Provider value={{ routes }} >
                <Provider store={Store}>
                    <ToastContainer/>
                    <BrowserRouter basename={process.env.PUBLIC_URL}>
                        <Router history={history}>
                            <AuthProvider>
                                <Switch> 
                                  {/*Giriş yapma Sayfası */}

                                    {/*----*/}
                                    <Route
                                    key={1}
                                    path={'/login'}
                                    component={LoginPage}
                                    />
                                    {/*----*/}
                                    <AuthGuard>
                                    {/*    */}
                                    <Layout/>
                                    </AuthGuard>
                                </Switch>
                            </AuthProvider>
                        </Router>
                    </BrowserRouter>
                </Provider>
            </AppContext.Provider>
        </>
    );
}
