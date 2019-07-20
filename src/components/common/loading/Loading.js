import React from 'react';
import './loading.css';

const Loading = (props) => {
   return (
       <div className="Loading" style={props.style} >

       </div>
   )
}
Loading.defaultProps ={
    style:{
        width:"56px",
        height:"56px"
    }
}

export default Loading;