import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Users} from "./components/Users/Users";
import { Login } from './components/Login/Login';

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile/:userId?'} render={() => <Profile />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs />}/>
                    <Route path={'/news'} render={() => <News />}/>
                    <Route path={'/music'} render={() => <Music />}/>
                    <Route path={'/settings'} render={() => <Settings />}/>
                    <Route path={'/users'} render={() => <Users />}/>
                    <Route path={'/login'} render={() => <Login />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
