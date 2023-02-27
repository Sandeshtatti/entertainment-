import { useState } from "react";
import '../styles/celebs.css'

const Celebs = () => {

    //database

    let stars = [
        {
            img: "images/11.jpg",
            name: "Appu",
            id: 1
        },
        {
            img: "images/22.jpg",
            name: "Anu",
            id: 2
        },
        {
            img: "images/55.jpg",
            name: "kiccha",
            id: 3
        },
        {
            img: "images/44.webp",
            name: "rockey",
            id: 4
        },
        {
            img: "images/33.webp",
            name: "yeshFamily",
            id: 5
        }
    ]
    let [starsData, setData] = useState(stars)
    let handleremove = (id, name) => {
        setData(starsData.filter(x => x.id != id))
        alert(`${name} has been removed`)

    }
    return (
        <div className="celebs">
            {starsData.map(data => (
                <div className="celebs_list">
                    <div className="img">
                        <img src={data.img} alt="" />
                    </div>
                    <div className="info"><h1>{data.name}</h1>
                        <button onClick={() => handleremove(data.id, data.name)}>Remove</button>
                    </div>


                </div>
            ))}


        </div>
    );
}

export default Celebs;