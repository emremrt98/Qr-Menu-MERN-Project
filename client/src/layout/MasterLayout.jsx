import React from 'react'
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
    return (
        <div className='layout'>
            <Header />
            <Outlet />
        </div>
    )
}
