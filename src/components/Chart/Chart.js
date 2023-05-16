import React from "react";
import ChartBar from "./ChartBar";
import Card from "../UI/Card";
import './Chart.css'


const Chart = ({expenses}) =>{
    let bars = expenses.sort((itemA, itemB)=>itemA.date-itemB.date).map(item=>
        {
            //mapping expenses to just amounts, then spreading contents into multiple args for Math.max() to consume. This max will be relative basis for all other expense bar heights.
            const max = Math.max(...expenses.map(ex=>ex.amount));
            const height = (item.amount/max)*100;
            item.height = height;
            //dividing the space equally between bars on the chart according to how many expenses there are to be charted
            const divisor = expenses.length;
            const width = (1/divisor)*100;
            item.width = width;

            return <ChartBar item={item}/>
        }
        
    )
    return(
        <Card className='expense-chart'>
            <div className="bar-container">
                {bars}
            </div>
        </Card>
    )
}

export default Chart;