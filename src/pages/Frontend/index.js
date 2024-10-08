import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./Home"

// Components
// import Header from "../../components/frontend/Header"
import Footer from "../../components/frontend/Footer"

export default function Index() {
    return (
        <>
            {/* <Header /> */}
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<h1 className='text-center'>Page Not Found!</h1>} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
