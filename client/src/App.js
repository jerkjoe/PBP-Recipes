import React, { Fragment, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import PrivateRoute from './components/routing/PrivateRoute';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';
if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path="/" component={Landing}></Route>

                    <section className="container">
                        <Alert></Alert>
                        <Switch>
                            <Route
                                exact
                                path="/register"
                                component={Register}
                            ></Route>
                            <Route
                                exact
                                path="/login"
                                component={Login}
                            ></Route>
                            <PrivateRoute
                                exact
                                component={Dashboard}
                                path="/dashboard"
                            ></PrivateRoute>
                            <PrivateRoute
                                exact
                                component={CreateProfile}
                                path="/create-profile"
                            ></PrivateRoute>
                            <PrivateRoute
                                exact
                                component={EditProfile}
                                path="/edit-profile"
                            ></PrivateRoute>
                            <PrivateRoute
                                exact
                                component={AddExperience}
                                path="/add-experience"
                            ></PrivateRoute>
                            <PrivateRoute
                                exact
                                component={AddEducation}
                                path="/add-education"
                            ></PrivateRoute>
                            <PrivateRoute
                                exact
                                component={Profiles}
                                path="/profiles"
                            ></PrivateRoute>
                            <PrivateRoute
                                exact
                                component={Profile}
                                path="/profile/:id"
                            ></PrivateRoute>
                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
