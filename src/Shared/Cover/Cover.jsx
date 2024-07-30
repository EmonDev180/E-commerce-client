
const Cover = ({ img, title }) => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mx-auto p-4 md:p-8 lg:p-12">
                        <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;