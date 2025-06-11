import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GiShoppingCart } from "react-icons/gi";
import useCart from "../../hooks/useCart";


const Navber = () => {

  const { user, logOut } = useContext(AuthContext)

  const [cart] = useCart()



  const handlelogOut = () => {


    logOut()
      .then(() => {

      })
      .catch(error => {
        console.log(error)
      })







  }

  const navLinks = <>

    <li className="mt-2 text-xl text-white font-bold"><Link to='/'>Home</Link></li>
    <li className="mt-2 text-xl text-white font-bold "><Link to='/about'>About</Link></li>
    <li className="mt-2 text-xl text-white font-bold"><Link to='/shop'>Shop</Link></li>
    <li className="mt-2 text-xl text-white font-bold"><Link to='/blog'>Blog</Link></li>



    {
      user ? <>

        <button onClick={handlelogOut} className="btn btn-ghost mt-2 text-xl text-white font-bold">logOut</button>
      </>
        :
        <>
          <li className="mt-2 text-xl text-white font-bold"><Link to='/login'>Login</Link></li>
        </>
    }

    <li>
      <Link to="/dashboard/cart">

        <button className="btn btn-primary">
          <GiShoppingCart />
          <div className="badge">+{cart.length}</div>
        </button>

      </Link>
    </li>

  </>
  return (
    <div className="navbar fixed  z-10 bg-gray-500 bg-opacity-30 max-w-screen-xl text-center md:navber-fixed sm:navber-fixed ">
      <div className="navbar-start">
      <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-[1] p-10 shadow bg-black w-52 text-blue-500 ">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">E-commerce</a>
      </div>
      <div className="navbar-center  hidden lg:flex ">
        <ul className="menu menu-horizontal py-0 px-1">

          {navLinks}

        </ul>
      </div>

      <div className="navbar-end px-24">
        
      </div>



    </div>
  );
};

export default Navber;