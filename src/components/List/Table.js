import React from 'react';
import './table.css';
import Pagination from './Pagination';
import {renderChangeProcent} from '../renderChangeProcent';
import {Link} from 'react-router-dom';
const Table = props=>{
    const currencies = props.currencies;
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
                                        <td> <span><Link to={"/currency/"+currency.id}>{currency.name}</Link></span></td>
                                        <td><span className="Table-dollar">{currency.price+" $"}</span></td>
                                        <td><span className="Table-dollar">{currency.marketCap+' $'}</span></td>
                                        <td>{renderChangeProcent(currency.percentChange24h)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                        
                <Pagination
                
                 switchPage = {props.switchPage} 

                 currentPage = {props.currentPage}

                 totalPage = {props.totalPage}
                />
                
        </div>
    )
}

export default Table;