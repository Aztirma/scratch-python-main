import HeaderLogin from '../../components/HeaderLogin';
import useAuth from '../../hooks/useAuth';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import logo from '../../assets/logo.png';

const AccountConfirmation = () => {
    const { newUserEmail } = useAuth();

    const test = () => {
        window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
    }

    return (
        <>
            <HeaderLogin/>

            <div className="flex flex-col items-center justify-center ">
                <MarkEmailReadIcon style={{ fontSize: 150 }} className="mb-4 text-purple-principal" />
                <h1 className="text-3xl font-bold mb-2">Check your email!</h1>
                <p className="text-lg text-gray-600 mb-8">Click on the link we sent to <strong>{newUserEmail}</strong> to finish your account setup.</p>

                <button className="bg-purple-principal hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full mb-4 w-1/3"
                onClick={test}>
                    Open email inbox
                </button>
                <p className="text-gray-600 ">No email in your inbox? <a href="/account-confirmation" className="text-purple-principal hover:underline">Let's resend it.</a></p>
                <p className="text-gray-600">Wrong address? <a href="/" className="text-purple-principal hover:underline">Log out</a> to sign in with different emails</p>
            </div>
        </>

    );
};
export default AccountConfirmation;

