import HeaderLogin from '../../components/HeaderLogin';
import useAuth from '../../hooks/useAuth';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import logo from '../../assets/logo.png';

const AccountConfirmation = () => {
    const { newUserEmail } = useAuth();
    return (
        <>
            <header className="flex items-center justify-between px-6 py-4 bg-white w-full">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-12" />
                    <p className="ml-4 font-epilogue text-[18px] leading-[26px] font-bold text-neutral-550 text-slate-600">KOMI</p>
                </div>
                <p className="font-epilogue  text-gray-600 cursor-pointer" onClick={() => window.location.href = '/some-page'}>
                Don't have an account?{' '}
                            <a href="/create-account" className="text-purple-principal hover:underline">
                                Register now
                            </a>
                </p>


            </header>

            <div className="flex flex-col items-center justify-center ">
                <MarkEmailReadIcon style={{ fontSize: 150 }} className="mb-4 text-purple-principal" />
                <h1 className="text-3xl font-bold mb-2">Check your email!</h1>
                <p className="text-lg text-gray-600 mb-8">Click on the link we sent to <strong>{newUserEmail}</strong> to finish your account setup.</p>

                <button className="bg-purple-principal hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full mb-4 w-1/3">
                    Open email inbox
                </button>
                <p className="text-gray-600 ">No email in your inbox? <a href="#" className="text-purple-principal hover:underline">Let's resend it.</a></p>
                <p className="text-gray-600">Wrong address? <a href="/login" className="text-purple-principal hover:underline">Log out</a> to sign in with different emails</p>
            </div>
        </>

    );
};
export default AccountConfirmation;

