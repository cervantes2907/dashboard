
import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const LineGrafica = ({categories, series}) => {
const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({

    
    chart: {
        plotBackgroundColor: '#000',
        plotBorderWidth: null,
        plotShadow: false,
        type: 'line'
    },

    title: {
        text: "Grafica de Poblacion en Colombia"
     },
     subtitle: {
       text: "Genero: Hombres"
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
      
      plotOptions: {
        series: {
          point: {
            events: {
              mouseOver(e){
                setHoverData(e.target.category)
              }
            }
          }
        }
      }
    });
  
    useEffect(() => {
      setChartOptions({ ...chartOptions,
        series: series,
        xAxis: {
          categories: categories
        }  
        });
  
  }, [series,categories]);
  
    
  
    return (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
          />
       
        </div>
      )
  }

export default LineGrafica