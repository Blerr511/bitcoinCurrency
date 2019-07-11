import React from 'react';
import './notFound.css';
import {Link} from 'react-router-dom';
const NotFound = ()=>(
    <div className="NotFound" >
      <h1 className="NotFound-title" >  Page not found :)</h1>
    <Link to = "/" className = "NotFound-link" >Homepage</Link>
    </div>
)
export default NotFound;