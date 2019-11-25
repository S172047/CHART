import React, { Component } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default class MyBarChart extends Component {
    handleYear = e => {
      if (e.key === "Enter") {
     
        this.props.onYearFilter(this.props.chartName, e.target.value);
        console.log(e.target.value);
      }
    };
    render() {
     
      let co2 = this.props.Co2Emission;
      if (co2 === undefined) return <p>There is no data.</p>;

console.log(co2)

const dataBarChart = [
  {name: 'Gas Fuel',  value: co2["Liquid Fuel"] },
  {name: 'Liquid Fuel', value: co2["Liquid Fuel"] },
  {name: 'Solid Fuel',  value: co2["Solid Fuel"] },
  {name: 'Cement',  value: co2["Cement"]},
 ];

 const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];




    return (
     
      <div style={{ width: "300px", height: "400px", float: "left" }}>
        <input
          type="text"
          placeholder="Year..."
          onKeyDown={e => this.handleYear(e)}
        />

<BarChart
        width={300}
        height={300}
   

        data={dataBarChart}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
     
        <Bar dataKey="value">
        <Cell fill={COLORS[0]} />
            <Cell fill={COLORS[1]} />
            <Cell fill={COLORS[2]} />
            <Cell fill={COLORS[3]} />
           
          </Bar>
       
      </BarChart>

      
     </div>
    );
  }
}



