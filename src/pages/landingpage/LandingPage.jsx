import Footer from '@/layouts/footer/Footer'
import Header from '@/layouts/header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default LandingPage