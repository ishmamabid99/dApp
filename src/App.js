import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Test from './pages/Test'
export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' >
                    <Home />
                </Route>
                <Route exact path='/test'>
                    <Test />
                </Route>
            </Switch>
        </Router>
    )
}
