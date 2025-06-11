

const BlogCard = ({ blog }) => {

    const { _id, title, content, image, date, author } = blog;


    return (
        <div className="card card-compact bg-gray-100 w-96 ">
            <figure>
                <img className="w-[400px] h-[300px]"
                    src={image}
                    alt="Blog Post"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <div className=" flex justify-between">
                    <h2>{author}</h2>
                    <h2>{date}</h2>
                </div>
                
            </div>
        </div>

    );
};

export default BlogCard;