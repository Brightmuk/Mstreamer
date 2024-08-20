import '../css/App.css';
import '../css/Header.css';

function Header(){

    return (
        <div className="header">
            <h3 className="text-center">MStreamer</h3>
            <h4> <img src={`${process.env.PUBLIC_URL}/images/icons/home.png`}></img> Home</h4>
            <h4> <img src={`${process.env.PUBLIC_URL}/images/icons/search.png`}></img> Search</h4>
        </div>
    )
}

export default Header;