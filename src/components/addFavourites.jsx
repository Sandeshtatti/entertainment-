import "../styles/addFavourites.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const AddFavourites = () => {

    let [title, settitle] = useState("")
    let [genre, setgener] = useState("")
    let [language, setlanguage] = useState("")
    let [rating, setrating] = useState("")
    let navigate = useNavigate()


    let handlesubmit = (e) => {
        e.preventDefault()

        let data = { title, genre, language, rating }
        // console.log(data);
        fetch('http://localhost:4000/favourites',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)

        })
        alert("data has been updated")
        navigate('/movies')
      

    }
    let reset=()=>{
        settitle("")
        setgener("")
        setlanguage("")
        setrating("")   
    }
    return (
        <div className="addfav">
            <h2 style={{ textAlign: 'center' }}>Add to Favourites</h2>
            <div className="form">
                <div className="form_image">
                    <img width="400" height="500" src="https://www.seekpng.com/png/detail/293-2936624_clip-art-kid-watching-movies-cartoon.png" alt="" />
                </div>
                <div className="form_inputs">
                    <form action="" onSubmit={handlesubmit}>
                        <div className="title" >
                            <input type="text" placeholder="enter title" value={title} onChange={(e) => settitle(e.target.value)} />
                        </div>
                        <div className="genre">
                            <input type="text" placeholder="enter gener of the " value={genre} onChange={(e) => setgener(e.target.value)} />
                        </div>
                        <div className="language">
                            <input type="text" placeholder="enter language" value={language} onChange={(e) => setlanguage(e.target.value)} />

                        </div>
                        <div className="rating">
                            <input type="text" placeholder="enter rating" value={rating} onChange={(e) => setrating(e.target.value)} />
                        </div>
                        <button type="submit">Add to Favourited</button> <br /><br />
                      
                        <button type="reset" onClick={reset} >reset</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddFavourites;