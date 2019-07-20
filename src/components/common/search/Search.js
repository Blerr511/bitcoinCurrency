import React from 'react';
import {API_URL} from '../../config/Config';
import Loading from '../loading/Loading';
import {Link} from 'react-router-dom';

import './search.css';

class Search extends React.Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state={
            data:[],
            loadgin:false,
            searchQuery:null,
            errorMessage:null
        }

    }
    renderSharchResult(){
        if(this.state.data.length||this.state.errorMessage)
        return(
            <div className="Search-result-container">
            {   
                this.state.data.map(el => (
                    <Link key={el.id} to={`/currency/${el.id}`}>
                    <div onClick={()=>{this.setState({data:[],searchQuery:''})}} className="Search-result" >
                        {el.name}
                    </div></Link>
                ))
            
            }
            {this.state.loadgin?<Loading/>:null}

         
                <div className="Search-no-result">{this.state.errorMessage}</div>
            
        </div>
        )
        else
        return ""
    }
    handleChange(e){
        const searchQuery = e.target.value;
        this.setState({searchQuery:searchQuery,loadgin:true})
        if(!searchQuery){
            this.setState({data:[],loadgin:false})
            return "";
        }
        fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`)
        .then(data=>data.json())
        .then(data=>{
            this.setState({loadgin:false})
            this.setState({data:data})
            if(data.length){
            this.setState({errorMessage:""})

            }
            else
            this.setState({errorMessage:"not found"});
            
        
        
    })
    .catch(err=>{
        this.setState({errorMessage:err});

    })




    }
    render(){
        return(
            <div className="Search">
                <span className="Search-icon" >
                </span>
                <input value={this.state.searchQuery} className="Search-input" onChange={this.handleChange} type="text" placeholder="Curency Name" />
                {this.renderSharchResult()}
            </div>
        )
    }
}

export default Search;