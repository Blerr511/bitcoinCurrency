import React from 'react';
import '../index.css';

export const renderChangeProcent = proc=>{
    if(proc<0)
        return (
            <span className="percent-fallen" >{proc}</span>
        )
        else if(proc===0)
        return (
            <span >-</span>
        )
  
        return (
            <span  className="percent-raised">{proc}</span>
        )
    
    
}