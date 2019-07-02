import React from 'react';
import { helper } from '../../Helper';
import {renderChangeProcent} from '../renderChangeProcent';
import {API_URL} from '../config/Config';
import './table.css';
class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currencies: [],
            error: null,
        }
    }
    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch(`${API_URL}/cryptocurrencies?page=1&perPage=20`)
            .then(helper)
            .then(data => {
                this.setState({
                    currencies: data.currencies,
                    loading: false,
                });
            })
    }
    render() {
        const { loading, currencies } = this.state;

        if (loading) {
            return (
                <div>
                    Loading............
        </div>
            )
        }
        return (
            <div>
          
                <table>
                    <thead className='Table-head'>
                        <tr>
                            <th><p>Rank</p> </th>
                            <th><p>Cryptocurrency</p> </th>
                            <th><p>Price</p></th>
                            <th><p>MarketCap</p></th>
                            <th><p>24h changing</p></th>
                        </tr>
                    </thead>
                    <tbody className="Table-body" >
                        {
                            currencies.map((currency, id) => {
                                return (
                                    <tr key={currency.id} className='Table-container'>
                                       <td><span className="Table-rank">
                                            {currency.rank}
                                        </span></td>
                                        <td> <span>{currency.name}</span></td>
                                        <td><span className="Table-dollar">{currency.price+" $"}</span></td>
                                        <td><span className="Table-dollar">{currency.marketCap+' $'}</span></td>
                                        <td>{renderChangeProcent(currency.percentChange24h)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default List;