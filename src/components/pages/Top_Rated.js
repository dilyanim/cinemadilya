import axios from "axios";
import { useEffect, useState } from "react";
import {API_KEY} from './API_KEY'


const Top_Rated  = ()  => {
     const [ popular , setPopular] = useState([])
     function  getPopular  () {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`).then(res => {
            setPopular(res.data.results)
        })
     }
     useEffect(() => {
        getPopular()
     } , [])
     console.log(popular);
     return (
        <div id="top_rated">
         <div className="container">
            <div className="top_rated">
               {
                  popular.map(el => (
                     <div>
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

export default Top_Rated;