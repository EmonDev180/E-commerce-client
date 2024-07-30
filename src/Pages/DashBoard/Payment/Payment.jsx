
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheakOutForm from './CheakOutForm';

// todo: add publisable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_Geteway_pk);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="payment" subHeading="please play to eat" ></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheakOutForm></CheakOutForm>
                </Elements>

            </div>
        </div>

    );
};

export default Payment;