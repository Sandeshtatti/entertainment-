import '../styles/movies.css'
import { useEffect, useState } from 'react'
import MoviesLogic from './moviesLogic'
const Movies = () => {
  
    let [favouritesData, setfavsdata] = useState([])

    useEffect(()=>{
        
        let favouritesData = async()=>{
            let responce = await fetch(' http://localhost:4000/favourites')
            let data = await responce.json()
            setfavsdata(data)
        }
        favouritesData()

    },[])


    let handleRemove = (id, title) => {
        setfavsdata(favouritesData.filter(x => x.id != id))
        alert(`${title} has been removed from favourites`)
    }
    return (
        <div className="movies">
            <MoviesLogic title='Favourites of All Time'
                data={favouritesData} fn={handleRemove}
            />
            <MoviesLogic title='Top Rated'
                data={favouritesData.filter(x => x.rating >= 4.5)} fn={handleRemove}
            />
            <MoviesLogic title='Top English Movies / Shows'
                data={favouritesData.filter(x => x.language == 'english')} fn={handleRemove}
            />
        </div>

    );
}

export default Movies;