import useAuth from '../hooks/useAuth'
import logo from '../assets/logo.png';

const HeaderLogin = () => {

    return (
        <header className="flex items-center px-6 py-4 bg-white w-full">
        <img src={logo} alt="Logo" className="h-12" />
        <p className="ml-4 font-epilogue text-[18px] leading-[26px] font-bold text-neutral-550 text-slate-600">KOMI</p>
    </header>
    )
}

export default HeaderLogin