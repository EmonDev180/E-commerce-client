import { FaLocationDot } from 'react-icons/fa6';
import logo from '../assets/images/category/images.jpeg'
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-base-content mt-12 text-white flex flex-row sm:flex-row sm:justify-between gap-6">
            <aside className="flex flex-col items-center sm:items-start text-white">
                <img src={logo} alt="ACME Industries Logo" className="mb-4" />
                <p className="text-center sm:text-left">E-commerce<br />Providing reliable tech since 1992</p>
            </aside>
            <nav className="flex flex-col items-center sm:items-start text-white">
                <h6 className="footer-title font-bold text-lg mb-4">Address</h6>

                <div>
                    <div className='flex gap-4 items-center text-white'>
                        <FaLocationDot />
                        <p>5 Green Ave, Apt. 3
                            Ann Arbor 48104, USA</p>



                    </div>


                    <div className='flex gap-4 items-center mt-4'>
                        <FaPhoneAlt />
                        <p>+186464667466</p>



                    </div>


                    <div className='flex gap-4 items-center mt-4'>
                        <MdEmail />
                        <p>shuvro@gmail.com</p>



                    </div>
                </div>

            </nav>
            <nav className="flex flex-col items-center sm:items-start text-white">
                <h6 className="footer-title font-bold text-lg mb-4">Working Hour</h6>
                                <p>Alltime shop</p>
             

            </nav>

        </footer>

    );
};

export default Footer;