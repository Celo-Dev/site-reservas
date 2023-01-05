import React from "react";
import { Switch, Route} from 'react-router-dom'

import Home from "./pages/Home";
import Reservas from "./pages/Reservas";

export default function Routes() {
 return (
   <div>
    <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/reservas' exact component={Reservas}/>
    </Switch>
   </div>
 );
}