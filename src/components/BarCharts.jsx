
import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const BarCharts = ({categories, series}) => {
  const [chartOptions, setChartOptions] = useState({

    chart: {
        plotBackgroundColor: '#000',
        type: 'column'
    },
    title: {
        text: "Grafica de Poblacion en Colombia"
     },
     subtitle: {
       text: "Genero: Ambos Sexos"
     },
  
     yAxis: { 
      title: {
          text: 'Cantidad de personas'
      }
     },
      xAxis: {
        categories: categories,
        title: {
            text: "Años"
        }
      
      },
      
        series: series,
      
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },

      plotOptions: {
        column:{
            stacking: 'percent'
        },
     
      }
    });
  
    useEffect(() => {
      setChartOptions({ ...chartOptions,
        series: series,
        xAxis: {
          categories: categories
        }  
        });
  
  }, [series, categories]);
  
    
  
    return (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
          />
       
        </div>
      )
  }

export default BarCharts