import { BrowserRouter as Route, Switch } from 'react-router-dom'
import ListUserComponent from "./ListUserComponent";
import React from "react";

const AppRouter = () => {
    return(
        <div style={style}>
            
                    <Switch>
                        <Route path="/pageAdmin" exact component={ListUserComponent} />
                        <Route path="/users" component={ListUserComponent} />
                    </Switch>
           
        </div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;