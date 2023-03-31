import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function Chart(props) {

    const [state, setState] = useState({
        series: [{
            data: [575, 430, 365, 250,]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['FIRST YEAR', 'SECOND YEAR', 'THIRD YEAR', 'FOURTH YEAR',
              ],
            }
          },
    })


    return (
        <div style={{backgroundColor:"white", borderRadius:20}}>
            <div id="chart">
                <ReactApexChart 
                options={state.options} 
                series={state.series} 
                type="area" 
                height={350}
                width={1290} />
            </div>
        </div>
    );
}

export default Chart;