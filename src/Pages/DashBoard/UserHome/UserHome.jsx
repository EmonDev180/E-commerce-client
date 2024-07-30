import useAuth from "../../../hooks/useAuth";


const UserHome = () => {

    const {user} = useAuth()

    return (
        <h2 className='text-3xl'>

                <span> Hi welcome </span>
              

                {

                    user ?.displayName ? user.displayName :    'Back'
                }

            </h2>

    );
};

export default UserHome;