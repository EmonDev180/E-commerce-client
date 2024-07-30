import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://e-commerce-server-mauve.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;