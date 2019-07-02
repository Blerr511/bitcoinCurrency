import React from 'react';
import Reklam from './Reklam';


class ComponentLife extends React.Component {
    constructor(){
        super();
        this.state={
        show:true    
        }
   
    }
    changeRandomComponent = ()=>{
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        let RComp ;
        if(this.state.show)
        RComp = <Reklam/>
        else
        RComp = null;
        
        return(
            <div>
                <h2>Hello LifeCycle jan</h2>
                <button onClick = {this.changeRandomComponent} >{this.state.show ? "close":"open"}</button>
               {RComp}
            </div>
        )
    }
}

export default ComponentLife;