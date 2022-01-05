import { useState } from "react";

const Home = () => {

    // let name = 'mario';
    const [name, setName] = useState('mario');
    const handleClick = (e) => {
        setName('kibrom');
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;