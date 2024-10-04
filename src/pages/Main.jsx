import React from "react";
import { Route, Routes  } from "react-router-dom";
import Work from "./Work";
import Blog from "./Blog";
import Contact from "./Contact";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

function Main (){
    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/work" element={<Work />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/*" element={<NotFound />}/>
            </Routes>
        </main>
    )
}
export default Main