import useAuth from '../hooks/useAuth'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const HeaderLogin = () => {

    return (
        <header className="flex items-center px-6 py-4 bg-white w-full">
            <Link to="/" className="flex items-center">
                <img src={logo} alt="Logo" className="h-12" />
                <p className="ml-4 font-epilogue text-[18px] leading-[26px] font-bold text-purple-900">KOMI</p>
            </Link>
        </header>
    )
}

export default HeaderLogin