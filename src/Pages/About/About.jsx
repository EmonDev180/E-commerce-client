
import Cover from '../../Shared/Cover/Cover';
import banner5 from '../../assets/images/category/Banner5.jpg'



const About = () => {
    return (
        <div>
            <Cover img={banner5} ></Cover>

            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/zV4mmPC/white-color-chair-cushion-gradient-vector-white-backgroun-873925-602105.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold text-pink-500">Armchair</h1>
                            <p className="py-6">An armchair is a versatile piece of furniture designed to provide comfort and support through its inclusion of armrests. Often upholstered, armchairs combine functionality with aesthetic appeal, making them a popular choice in various settings such as living rooms, reading nooks, and office spaces.</p>
                            <button   className="btn btn-primary">Read more </button>
                        </div>
                    </div>
                </div>




                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/v3kSrzM/close-up-camera-against-white-background-1048944-30865475.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold text-pink-500">Professional DSLR Camera</h1>
                            <p className="py-6">A professional DSLR (Digital Single-Lens Reflex) camera represents the pinnacle of photographic technology, designed to meet the demanding needs of professional photographers and serious enthusiasts. These cameras are renowned for their superior image quality, robust build, and extensive manual controls, making them suitable for a wide array of photography genres, from portrait and landscape to sports and wildlife photography.</p>
                            <button className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;