import React from 'react'
import { DashboardItem } from '../data'

function Dashboard() {
  return (
    <main>
        <div className="container">
            <div className="dashboard">
                <p>Featured works</p>
                <div className="dashboard-cards">
                    {
                        DashboardItem.map((item) =>{
                            return (

                                <div key={item.id} className="dashboard-card">
                                <img src={item.img} alt="" />
                                <div className="card-content">
                                    
                                    <h1>{item.title}</h1>
                                    
                                    <div className="dashboard-number">
                                        <p className='dashboard-p'>{item.year}</p>
                                        <p>{item.type}</p>
                                    </div>
                                    <p>{item.subtitle}</p>
                                </div>
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

export default Dashboard