import React, {useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from 'antd';
import {columns} from './TableData'
import '../assets/css/Table.css'

const DataInfo = () => {
    const baseUrl = "https://www.datos.gov.co/resource/kynu-zvgy.json";
  const [data, setData] = useState([]);
  const [ setDatos] = useState([]);
 


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
     })

}
    useEffect(() => {
        peticionGet();
    }, [])
  return (
    <>
     <Table 
     className='table_list'
     columns={columns}
     dataSource={data}
     />
 
    </>
  )
}

export default DataInfo