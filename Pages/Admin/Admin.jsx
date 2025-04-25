import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/sidebar/sidebar'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import { Routes, Route, Navigate } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
        <Route path='/' element={<Navigate to="/addproduct" />} />
      </Routes>
    </div>
  )
}

export default Admin
