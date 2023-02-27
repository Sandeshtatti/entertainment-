const MoviesLogic = (props) => {
    let header = props.title     //heading
    let favouritesData = props.data  // array
    let handleRemove = props.fn    // remove function
    return (  
        <div className="favs">
             <h1>{header}</h1>
            <div className="favs">
                { favouritesData.map((data)=>(
                    <div className="favs_list">
                        <h2>{data.title}</h2>
                        <p>{data.language}/{data.genre}</p>
                        <p>{data.rating}🌟</p>
                        <button onClick={()=> handleRemove(data.id,data.title)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default MoviesLogic;