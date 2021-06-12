import './App.css';


function Nav({ yellowBall, redBall, blueBall}) {

    return (
        <div className="navBar">
            <h1>Hannah & Brielle Ball Game</h1>
            <p>Red Ball's left: {redBall} </p>
            <p>Blue Ball's left: {blueBall} </p>
            <p>Yellow Ball's left: {yellowBall} </p>
        </div>

    );
}

export default Nav;