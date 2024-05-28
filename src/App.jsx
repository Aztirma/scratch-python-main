import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Create from "./pages/Create"
import Home from "./pages/Home"
import CreateQuizz from "./pages/Quizz/CreateQuizz"
import QuizzContainer from "./pages/Quizz/QuizzContainer"
import Tutorial from "./pages/Tutorial"
import Profile from "./pages/User/Profile.jsx"

//Ale agregadoa
import ExploreQuizz from "./pages/Quizz/ExploreQuizz"
import LibraryQuizz from "./pages/Quizz/LibraryQuizz"
import QuizzGame from "./pages/Quizz/QuizzGame.jsx"
import ReportQuizz from "./pages/Quizz/ReportQuizz.jsx"


import P01 from "./pages/Antiguo/P01.jsx"
import P02 from "./pages/Antiguo/P02.jsx"
import P03 from "./pages/Antiguo/P03.jsx"
import P04 from "./pages/Antiguo/P04.jsx"
import Voiceflow from './pages/Antiguo/Voiceflow.jsx'


import { AuthProvider } from "./context/AuthProvider.jsx"
import { QuizzProvider } from "./context/QuizzProvider.jsx"
import PrivateRoute from "./layouts/PrivateRoute"
import AccountConfirmation from './pages/Login/AccountConfirmation'
import CreateAccount from './pages/Login/CreateAccount'
import ForgotPassword from './pages/Login/ForgotPassword'
import Login from "./pages/Login/Login.jsx"
import PasswordResetConfirmation from './pages/Login/PasswordResetConfirmation'

import Appearance from './pages/User/Appearance'
import Audio from './pages/User/Audio'
import Bookmarks from './pages/User/Bookmarks'
import Language from './pages/User/Language'
import Progress from './pages/User/Progress'
import Published from './pages/User/Published'
import Schedule from './pages/User/Schedule'
import Security from './pages/User/Security'


const App = () => {
    return (
        <AuthProvider>
            <QuizzProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/voice" element={<Voiceflow />} />
                        <Route path="/create-account" element={<CreateAccount />} />
                        <Route path="/account-confirmation" element={<AccountConfirmation />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/password-reset-confirmation" element={<PasswordResetConfirmation />} />
                        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                        <Route path="/create" element={<PrivateRoute><Create /></PrivateRoute>} />
                        <Route path="/tutorial" element={<PrivateRoute><Tutorial /></PrivateRoute>} />
                        <Route path="/quizz" element={<PrivateRoute><QuizzContainer /></PrivateRoute>} />
                        <Route path="/quizz/create" element={<PrivateRoute><CreateQuizz /></PrivateRoute>} />

                        {/* <Route path="/support" element={<PrivateRoute><Support /></PrivateRoute>} /> */}
                        {/* <Route path="/support" element={<PrivateRoute><Voiceflow /></PrivateRoute>} /> */}
                        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
                        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                        <Route path="/progress" element={<PrivateRoute><Progress /></PrivateRoute>} />
                        <Route path="/security" element={<PrivateRoute><Security /></PrivateRoute>} />
                        <Route path="/appearance" element={<PrivateRoute><Appearance /></PrivateRoute>} />
                        <Route path="/audio" element={<PrivateRoute><Audio /></PrivateRoute>} />
                        <Route path="/language" element={<PrivateRoute><Language /></PrivateRoute>} />
                        <Route path="/published" element={<PrivateRoute><Published /></PrivateRoute>} />
                        <Route path="/schedule" element={<PrivateRoute><Schedule /></PrivateRoute>} />
                        <Route path="/bookmarks" element={<PrivateRoute><Bookmarks /></PrivateRoute>} />

                        <Route path="/P01" element={<PrivateRoute><P01 /></PrivateRoute>} />
                        <Route path="/P02" element={<PrivateRoute><P02 /></PrivateRoute>} />
                        <Route path="/P03" element={<PrivateRoute><P03 /></PrivateRoute>} />
                        <Route path="/P04" element={<PrivateRoute><P04 /></PrivateRoute>} />


                        <Route path="/library" element={<PrivateRoute><LibraryQuizz /></PrivateRoute>} />
                        <Route path="/explore" element={<PrivateRoute><ExploreQuizz /></PrivateRoute>} />
                        <Route path="/reports" element={<PrivateRoute><ReportQuizz /></PrivateRoute>} />
                        <Route path="/quizz/game/:id" element={<PrivateRoute><QuizzGame /></PrivateRoute>} />



                    </Routes>
                </BrowserRouter>
            </QuizzProvider>
        </AuthProvider>
    );
}

export default App
