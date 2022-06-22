import React from 'react';
import { Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../assets/css/Navbar.css';


const { Header } = Layout

const Navbar = () => {
  return (
    <Header >
        <ul className='izquierda'>
            <li><MenuOutlined className='icon_menu'/></li>
            <li className='title_izquierda'><span className='title_menu'>Dashboard Dinamico</span></li>
        </ul>
        <ul className='derecha'>
            <li><h4 className='img_navbar'>UCR</h4></li>
        </ul>
    </Header>
  )
}

export default Navbar