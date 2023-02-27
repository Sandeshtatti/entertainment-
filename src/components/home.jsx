import '../styles/home.css'


const Home = () => {

    let db = [
        {
            img: 'images/1.webp'
        },

        {
            img: 'images/2.webp'
        },

        {
            img: 'images/3.webp'
        },
        {
            img: 'images/4.webp'
        },
        {
            img: 'images/5.webp'
        }


    ]
    return (
        <div className="home">
            <div className="banner">
                <div className="discription">

                    <p>All time best worthy movies in just one click</p>
                    <button>Subscribe Now</button>
                </div>
                <div className="banner_image">
                    <img width='900' src="https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-12-03/cf_desk-5fb329e7-cf91-4884-8afc-073851786bdc.jpg    " alt="" />
                </div>
            </div>
            <h1>Recommented for you </h1>

            {db.map((arg) => (
                <div className="movies_list">
                    <img src={arg.img} alt="" />
                    {/* <h1>Recommented for you </h1> */}
                    {/* <img src="images/1.webp"  alt="" />
                <img src="images/2.webp"  alt="" />
                <img src="images/3.webp"  alt="" />
                <img src="images/4.webp"  alt="" />
                <img src="images/5.webp"  alt="" /> */}
                </div>
            ))}
        </div>
    );
}

export default Home;

