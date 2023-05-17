import React from "react";
import './ChartBar.css'

const ChartBar = ({item}) =>{
  
    return(
        <div className="chart-bar__wrapper" style={{width:item.width+"%"}}>
            <div className="chart-bar__amount">{'$'+item.amount}</div>
            <div className="chart-bar" style={{height:item.height+"%"}} key={item.id}>{item.title} </div>
            <div className="chart-bar__date">{item.date.toLocaleDateString()}</div>
        </div>
  
    )
}

export default ChartBar;