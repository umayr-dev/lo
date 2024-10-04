import React from 'react'
import Header from '../components/header'
import Banner from '../components/Banner'
import BannerSystem from '../components/BannerSystem'
import Dashboard from '../components/dashboard'

function HomePage() {
  return (
    <>
    <Banner />
    <BannerSystem/>
    <Dashboard/>
    </>
  )
}

export default HomePage