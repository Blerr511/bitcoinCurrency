import React from 'react';
import {renderChangeProcent} from '../renderChangeProcent';
import {API_URL} from '../config/Config';
import Loading from '../common/loading/Loading';
import {withRouter} from 'react-router-dom';
import './detal.css';

class Detal extends React.Component{
    constructor(props){
        super();
        this.state= {

            data:{
                name:null,
            symbol:null,
            price:null,
            rank:null,
            percentChange24h:null,
            marketCap:null,
            volume24h:null,
            totalSupply:null
            },
            loading:true,
            propsCurrency:props.currency
        }
    }

    fetchThis(c){
        fetch(`${API_URL}/cryptocurrencies/${c}`)
        .then(data=>data.json())
        .then(data=>{this.setState({data:data,loading:false})})
    }

    componentDidMount(){
       this.fetchThis(this.props.currency)
    }
    componentWillReceiveProps(newProps){
        this.fetchThis(newProps.currency)

    }
    render(){
        const currency = this.state.data;
        return(
            <div className="Detail">
                {this.state.loading?<Loading/>:null}
                <h1 className="Detail-heading">
                    {currency.name} ({currency.symbol})
                </h1>


                <div className="Detail-container">

                    <div className="Detail-item">
                        Price <span className="Detail-value">$ {currency.price}</span>
                    </div>

                    <div className="Detail-item">
                        Rank <span className="Detail-value">{currency.rank}</span>
                    </div>

                    <div className="Detail-item">
                        24H Change
                        <span className="Detail-value">{renderChangeProcent(currency.percentChange24h)}</span>
                    </div>

                    <div className="Detail-item">
                        <span className="Detail-title">Market cap</span>
                        <span className="Detail-dollar">$</span>
                        {currency.marketCap}
                    </div>

                    <div className="Detail-item">
                        <span className="Detail-title">24H Volume</span>
                        <span className="Detail-dollar">$</span>
                        {currency.volume24h}
                    </div>

                    <div className="Detail-item">
                        <span className="Detail-title">Total supply</span>
                        {currency.totalSupply}
                    </div>

                </div>
            </div>
        )
     
    }
    
}
export default withRouter(Detal);