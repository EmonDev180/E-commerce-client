import axios from "axios";
import { useNavigate } from "react-router-dom";



const axiosSecure = axios.create({
  baseURL: 'https://e-commerce-server-mauve.vercel.app'

})
const useAxiosSecure = () => {

  const navigate = useNavigate()


  axiosSecure.interceptors.request.use(function (config) {

    const token = localStorage.getItem('access-token')
    console.log('request stoped by interceptors', token)
    config.headers.authorization = `bearer ${token}`;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });


  // intercepts 401 and 403 status 


  axiosSecure.interceptors.response.use(function(response){

    return response;
  },(error) =>{

    const status = error.response.status;
    console.log('status code error in the inceptors',status);
    if(status === 401 || status === 403 ){
      navigate('/login')
    }
      return Promise.reject(error)
  })





  return axiosSecure
};

export default useAxiosSecure;