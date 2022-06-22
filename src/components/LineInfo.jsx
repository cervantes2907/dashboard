
import React, {useState, useEffect } from 'react'
import axios from 'axios';
import LineGrafica from './LineGrafica';
const LineInfo = () => {

  
    const baseUrl = "https://www.datos.gov.co/resource/kynu-zvgy.json";
    const [data, setData] = useState([]);
    const [datos, setDatos] = useState([]);
    const [seriesState, setSeries] = useState([]);
    const [categoriesState, setCategories] = useState([]);
  
  
  
 let series = []
 let categorias = []

const peticionGet=()=>{
    axios.get(baseUrl)
    .then(response=>{
        setData(response.data)
        console.log('respuesta de datos',response.data );
        setDatos( response.data.map(año=>{return  parseInt(año.a_o)}))  
        const edadesGrupos = response.data.map((item) => item.grupos_de_edad)
        const listAnios = response.data.map((item) => item.a_o)

        let gruposDeEdades = []
        edadesGrupos.forEach((item) => {                                                  
            if(!gruposDeEdades.includes(item)) {
                gruposDeEdades = [...gruposDeEdades, item] 
            } 
        });


        listAnios.forEach((item) => {                                                  
            if(!categorias.includes(item)) {
                categorias = [...categorias, item] 
            } 
        });

        series = gruposDeEdades.map((item) => ({
            name: item, data: response.data.filter((e) => e.grupos_de_edad === item).map((elem) => (parseInt(elem.hombres))) }
        ));

        console.log(series)
        console.log(categorias)
        setSeries(series)
        setCategories(categorias)        

     })

}
  

    useEffect(() => {
        peticionGet();
    }, [])
  
      return (
          <>   
  
             <LineGrafica
              series={seriesState}
              categories={categoriesState} />
          </>
        
      )
  
  }

  export default LineInfo;


