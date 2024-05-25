import useAuth from '../hooks/useAuth'

const HeaderAntiguo = () => {

    //const { cerrarSesionAuth: logout } = useAuth()

    const handleCerrarSesion = () => {
        console.log('cerrar sesion')
        //logout()
    }


    return (
        <header className="px-4 py-3 bg-[#0F172A] w-full">
            <div className="md:flex md:justify-between">
                <a href="/home" className="text-4xl text-white font-black text-center mb-5 md:mb-0">
                    Interacción Humano Computador
                </a>

                <div className='flex flex-col md:flex-row items-center gap-4'>
                    <a href="/p01" className="text-white hover:text-blue-300 text-xl p-3 uppercase font-bold transition duration-300">P01</a>
                    <a href="/p02" className="text-white hover:text-blue-300 text-xl p-3 uppercase font-bold transition duration-300">P02</a>
                    <a href="/p03" className="text-white hover:text-blue-300 text-xl p-3 uppercase font-bold transition duration-300">P03</a>
                    <a href="/p04" className="text-white hover:text-blue-300 text-xl p-3 uppercase font-bold transition duration-300">P04</a>
                    <button
                        type="button"
                        className='text-white text-sm bg-blue-700 p-3 rounded-md uppercase font-bold hover:bg-blue-800 transition duration-300'
                        onClick={handleCerrarSesion}
                    >Cerrar Sesión</button>
                </div>
            </div>
        </header>
    )
}

export default HeaderAntiguo