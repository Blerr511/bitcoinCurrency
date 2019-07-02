import React from 'react';
import {API_URL} from '../config/Config';
import { helper } from '../../Helper';
class Reklam extends React.Component {
    constructor(){
        super();
        this.state= {
            currency : {}
        }
        this.interval = setInterval(this.updateCurency,5000);
       
    }
    updateCurency = ()=>{
        const coins = ['bitcoin','ethereum','ripple','litecoin','eos'];
        const n = Math.ceil(Math.random()*coins.length-1);
        fetch(`${API_URL}/cryptocurrencies/${coins[n]}`)
        .then(helper)
        .then(data=>this.setState({currency:data}))
    }
    componentDidMount = ()=>{
        this.updateCurency();
    }
    componentWillUnmount = ()=>{
        clearInterval(this.interval);
    }

    render(){
        console.log(this.state.currency)
        return(
            <div>
                <h2>{this.state.currency.name}</h2>
            </div>
        )
    }
}

export default Reklam;