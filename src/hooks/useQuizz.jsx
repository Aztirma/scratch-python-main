import { useContext } from 'react'
import QuizzContext from '../context/QuizzProvider'

const useQuizz = () => {
    return useContext(QuizzContext)
}

export default useQuizz;