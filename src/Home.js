import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // const [name, setName] = useState('mario');

    useEffect(() => {
        // setTimeout to simulate the realistic time it take to get data
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000)
    }, []);

    return (
        <div className="home">
            {/* <BlogList blogs={blogs} title='All Blogs!' /> */}
            {error && <div>{error}</div>}
            {isPending && <div> Loading... </div>}
            {/* this makes sure by checking if blogs is not false/ null inorder to execute the next part of  the codee/component */}
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
            {/* <button onClick={() => setName('Nati')}> Change name </button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}

export default Home;