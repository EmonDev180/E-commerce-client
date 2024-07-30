
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const NewsLetter = () => {
    return (
        <section>

            <SectionTitle
                heading={'NewsLetter Section'}
                subHeading={'From NewsLetter'}
            >

            </SectionTitle>


            <div className='w-full bg-opacity-50 bg-black flex flex-col items-center justify-center p-6'>

                <div className="hero min-h-60 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url(https://i.ibb.co/S3ZHcZ4/images.jpg)' }}>
                    <div>

                        <div className="grid justify-items-center gap-4 text-center text-white">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">join our NewsLetter</h1>
                            <p className='text-sm sm:text-base md:text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vero delectus nemo tempore fugiat dicta dolorem adipisci soluta nostrum laboriosam.</p>

                            <div className="join mt-4 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                                <form>
                                    <div className="join">
                                        <input type="email" className="input input-bordered join-item" name="email" placeholder="Email" />
                                        <button className="btn join-item rounded w-full sm:w-auto  sm:mt-0">Subscribe</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default NewsLetter;