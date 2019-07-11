import React from 'react';
import {API_URL} from '../config/Config';
import './detal.css'
class Detal extends React.Component{
    constructor(props){
        super();
        this.state = {
            id:props.id,
            name:"",
            symbol:"",
            rank:"",
            percentChange24h:"",
            price:"",
            marketCap:"",
            volume24h:"",
            totalSupply:""
        }
    }
    componentDidMount = ()=>{
        fetch(`${API_URL}/cryptocurrencies/${this.state.id}`)
        .then(data=>data.json())
        .then(data=>{
            
            this.setState({
                name:data.name,
                symbol:data.symbol,
                rank:data.rank,
                percentChange24h:data.percentChange24h,
                price:data.price,
                marketCap:data.marketCap,
                volume24h:data.volume24h,
                totalSupply:data.totalSupply
            })
        })
    }
    render(){
        const {id,name,symbol,rank,percentChange24h,price,marketCap,volume24h,totalSupply} = this.state;
        return (
            <div style={{position:"absolute",left:200,top:0,display:"flex",justifyContent:"center"}} >
                <div>

                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Rank</th>
                        <th>24h change percent</th>
                        <th>Price</th>
                        <th>Market cap</th>
                        <th>Volume 24h</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                <tbody>
                <tr>
                    <td>
                        <span>{name}</span>
                    </td>
                    <td>
                       <span>{symbol}</span>
                    </td>
                    <td>
                    <span>{rank}</span>
                    </td>
                    <td>
                    <span>{percentChange24h}</span>
                    </td>
                    <td>
                    <span>{price}</span>
                    </td>
                    <td> 
                     <span>{marketCap}</span>
                    </td>
                    <td>
                    <span>{volume24h}</span>
                    </td>
                    <td>
                    <span>{totalSupply}</span>
                    </td>
                </tr>
                </tbody>
                </table>
                </div>
            </div>
        )
    }
}
export default Detal;