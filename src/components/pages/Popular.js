import axios from "axios";
import { useEffect, useState } from "react";
import {API_KEY} from './API_KEY'


const Popular = ()  => {
     const [ popular , setPopular] = useState([])
     function  getPopular  () {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then(res => {
            setPopular(res.data.results)
        })
     }
     useEffect(() => {
        getPopular()
     } , [])
     console.log(popular);
     return (
        <div id="popular">
         <div className="container">
            <div className="popular">
               {
                  popular.map(el => (
                     <div className="popular-img">
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`} alt />
                          <h3>{el.title}</h3>
                     </div>
                  ))
               }
            </div>

         </div>

        </div>
     )
}

export default Popular;