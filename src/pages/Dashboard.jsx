import React from "react";
import 'antd/dist/antd.css'
import { Col, Row, Statistic } from "antd";
import Navbar from "../components/Navbar";
import '../assets/css/Dashboard.css'
import DataInfo from "../components/DataInfo";
import LineInfo from "../components/LineInfo";
import '../assets/css/LineInfo.css'
import BarInfoCharts from "../components/BarInfoCharts";



const Dashboard = () => {
  return (
    <>
  
      <Row>
        <Col xs={24}>
          <Navbar />
        </Col>
      </Row>
      
      <br/>

      <div className="container">
        <Row gutter={30}>
          <Col xs={24} sm={12} lg={6} >
            <div className="cards_container">
              <Statistic  title="Rango" value="2018 - 2023" valueStyle={{color: 'white'}} style={{backgroundColor: '#4BA6FE'}} className='cards_container' />
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6} >
            <div className="cards_container">
              <Statistic  title="Pais" value="Colombia" valueStyle={{color: 'white'}} style={{backgroundColor: '#FF838A'}} className='cards_container' />
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6} >
            <div className="cards_container">
              <Statistic  title="Edades" value="00 - 100 y mas " valueStyle={{color: 'white'}} style={{backgroundColor: '#1BD0C2'}} className='cards_container' />
            </div>
          </Col>
          <Col xs={24} sm={12} lg={6} >
            <div className="cards_container">
              <Statistic  title="Genero" value="Ambos sexos" valueStyle={{color: 'white'}} style={{backgroundColor: '#B470FC'}} className='cards_container' />
            </div>
          </Col>
        </Row>
        <br />
        <Row gutter={20}>
          <Col  xs={24} md={12} className="graficaCircular">
            <BarInfoCharts />
          </Col>
          <Col  xs={24} md={12}  >
            <LineInfo  className='linecharts'/>
          </Col>
        </Row>
        <br />
    <Row>
        <Col span={24}>
       <DataInfo />
        </Col>
    </Row>

      </div>
    </>
  );
};

export default Dashboard;
