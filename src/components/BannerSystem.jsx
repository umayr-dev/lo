import React from 'react'
import { BannerSystemData } from '../data'
function BannerSystem() {
  return (
    <main className='main-banner'>
        <div className="container">
            <div className="bannerSystem">
                <div className="introduction">
                    <p>Recent posts</p>
                    <p>View all</p>
                </div>
                <div className="bannersystem__cards">
                    {
                        BannerSystemData.map((item)=>{
                            return (
                            
                            <div key={item.id} className="card">
                                <h1>{item.title}</h1>
                                <div className="number">
                                    <p>{item.date}</p>
                                    <p>{item.style}</p>
                                </div>
                                <p>{item.subtitle}</p>
                            </div>
                        
                    )
                        })
                    }
                </div>
            </div>
        </div>
    </main>
  )
}

export default BannerSystem