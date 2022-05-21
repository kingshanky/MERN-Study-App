import React from "react";
import { Router,Switch, Route } from "react-router-dom";          

{/*   import Upsc from './components/Upsctoppers/Topers';   */}


import history from './history';

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>

            {/*    <Route path="/Syllabus" component={Syllabus} />   */}
                   
            
                                    
                </Switch>
            </Router>
        )
    }
}
