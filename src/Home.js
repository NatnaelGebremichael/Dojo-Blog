import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: 'lorem ipsum ...', author: 'mario', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum ...', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum ...', author: 'mario', id: 3 },
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effet run')
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            {/* <BlogList blogs={blogs} title='All Blogs!' /> */}
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="mario's blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('Nati')}> Change name </button>
            <p>{name}</p>
        </div>
    );
}

export default Home;