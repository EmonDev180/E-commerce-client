
import { useEffect, useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import banner5 from '../../assets/images/category/Banner5.jpg'
import BlogCard from "./BlogCard";

const Blog = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {

        fetch('https://e-commerce-server-mauve.vercel.app/blogs')
            .then(res => res.json())

            .then(data => setBlogs(data))


    }, [])

    return (
        <div>

            <div>
                <Cover img={banner5}></Cover>

                <div className="text-center mt-8">
                    <h2 className="text-5xl font-bold text-orange-500">BLOG SECTION</h2>
                </div>
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>


            </div>
        </div>
    );
};

export default Blog;