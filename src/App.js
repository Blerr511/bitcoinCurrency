import React from 'react';
import Header from './components/common/Header';
import List from './components/List/List';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import Detal from './components/detal/Detal';
const App = () => {
    
    return (
        <div>
            <BrowserRouter>             
            <Header />
            <div  style={{display:'flex',justifyContent:'center'}}>
            <Switch>            
            <Route path = "/" exact component = {List} />
            <Route exact  path = "/currency/:id" exact component = {(e)=><Detal currency={e.match.params.id} />} />

            <Route component = {NotFound}/>
            </Switch>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
