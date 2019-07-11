import React from 'react';
import Table from './Table';
import { helper } from '../../Helper';
import {API_URL} from '../config/Config';
class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currencies: [],
            error: null,
            page:{
            totalPage:5,
            currentPage:1
            }
        }
    }

   

    switchPage = direction =>{
        const newPage =  (direction + this.state.page.currentPage);

        if(newPage>=1&&newPage<=this.state.page.totalPage){
            this.setState({
                page:{
                    totalPage:5,
                    currentPage:newPage
                    }
            },this.fetchCurrencies)
            
    }

    }

    fetchCurrencies(){
        const page = this.state.page;
        this.setState({
            loading: true
        })
        fetch(`${API_URL}/cryptocurrencies?page=${page.currentPage}&perPage=20`)
            .then(helper)
            .then(data => {
                this.setState({
                    currencies: data.currencies,
                    loading: false,
                });
            })
    }

    componentDidMount() {
        this.fetchCurrencies();
        // const page = this.state.page;
        // this.setState({
        //     loading: true
        // })
        // fetch(`${API_URL}/cryptocurrencies?page=${page.currentPage}&perPage=20`)
        //     .then(helper)
        //     .then(data => {
        //         this.setState({
        //             currencies: data.currencies,
        //             loading: false,
        //         });
        //     })
    }
    render() {
        const { loading, currencies, error } = this.state;
        if (loading) {
            return (
                <div>
                    Loading............
        </div>
            )
        }
        return (
            <div>
          <Table
          currencies = {currencies}
            switchPage = {this.switchPage}
            currentPage = {this.state.page.currentPage}
            totalPage = {this.state.page.totalPage}
          />
              
            </div>
        )
    }

}

export default List;