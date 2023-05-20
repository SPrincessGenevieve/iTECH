import Navbar from '../Navbar';
import React from 'react';
import './components/dashboard/dashboard.css'
import Container from './components/dashboard/Container';
import Chart from './components/dashboard/Chart';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';



const Dashboard = () => {

  const [state, setState] = useState({
    totalStudents: 0,
    firstYear: 0,
    secondYear: 0,
    thirdYear: 0,
    fourthYear: 0,
    chartData: {
      series: [{
        data: [0, 0, 0, 0]
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
          categories: ['FIRST YEAR', 'SECOND YEAR', 'THIRD YEAR', 'FOURTH YEAR'],
        }
      },
    }
  });

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => {
        let firstYear = 0, secondYear = 0, thirdYear = 0, fourthYear = 0;
        data.forEach(student => {
          if (student.year === 'First Year') {
            firstYear++;
          } else if (student.year === 'Second Year') {
            secondYear++;
          } else if (student.year === 'Third Year') {
            thirdYear++;
          } else if (student.year === 'Fourth Year') {
            fourthYear++;
          }
        });
        const totalStudents = data.length;
        const chartData = {
          series: [{
            data: [firstYear, secondYear, thirdYear, fourthYear]
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
              categories: ['FIRST YEAR', 'SECOND YEAR', 'THIRD YEAR', 'FOURTH YEAR'],
            }
          },
        };
        setState(prevState => ({
          ...prevState,
          totalStudents,
          firstYear,
          secondYear,
          thirdYear,
          fourthYear,
          chartData,
        }));
      })
      .catch(err => {
        console.error(err);
      });
  }, []);



  return (
    <>
       <Navbar />
      <div style={{ backgroundColor: "#EBECF0", width: "96%", height: 10, padding: "20%", margin: 40, borderRadius: 20 }}>
        <div style={{ display: "flex", flexDirection: "row", marginTop: "-20.5rem", marginLeft: "-20.5rem" }}>
          <div><Container amount={state.totalStudents} title="Total Students Enrolled" /></div>
          <div style={{ backgroundColor: "white", borderRadius: 20 }}>
            <div id="chart">
              <ReactApexChart options={state.chartData.options} series={state.chartData.series} type="area" height={350} width={1290} />
            </div>
        </div>

        </div>
        <div style={{ display: "flex", flexDirection: "row", marginTop: "3rem", marginLeft: "-20.5rem" }}>
          <div><Container amount={state.firstYear} title="1ST Year"></Container></div>
          <div><Container amount={state.secondYear} title="2ND YEAR"></Container></div>
          <div><Container amount={state.thirdYear} title="3RD YEAR"></Container></div>
          <div><Container amount={state.fourthYear} title="4TH YEAR"></Container></div>
        </div>

      </div>
    </>
  );
};

export default Dashboard;