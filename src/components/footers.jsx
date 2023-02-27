import '../styles/footers.css'
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer_logo">
            <img src="images/11.svg" width={150} alt="" />
            </div>
            <div className="nav_links">
                <ul>
                    <li><a href="">Terms and conditions</a></li>
                    <li><a href="">Send us feedback</a></li>
                    <li><a href="">Help</a></li>
                </ul>


            </div>
            <div className="desc">
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
     );
}
 
export default Footer;