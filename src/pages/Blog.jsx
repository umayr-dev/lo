import React from 'react'
import { BlogItem } from '../data'

function Blog() {
  return (
    <main>
        <div className="container">
        <div className="blogs">

            <div className="blog">
                
                <h1>Blog</h1>
                {
                    BlogItem.map((item) =>{
                        return (
                            
                            <div key={item.id} className="blog-card">
                        <h1>{item.title}</h1>
                        <div className="blog-number">
                            <p>{item.date}</p>
                            <p className='blog-p'>{item.style}</p>
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

export default Blog