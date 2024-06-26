import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'regenerator-runtime/runtime';
import About from "./pages/About";
import Create from "./pages/Create";
import Home from "./pages/Home";
import CreateQuizz from "./pages/Quizz/CreateQuizz";
import Support from "./pages/Support.jsx";
import Tutorial from "./pages/Tutorial/Tutorial";
import Profile from "./pages/User/Profile.jsx";

//Ale agregadoa
import P01 from "./pages/Antiguo/P01.jsx";
import P02 from "./pages/Antiguo/P02.jsx";
import P03 from "./pages/Antiguo/P03.jsx";
import P04 from "./pages/Antiguo/P04.jsx";
import Voiceflow from './pages/Antiguo/Voiceflow.jsx';
import ExploreQuizz from "./pages/Quizz/ExploreQuizz";
import LibraryQuizz from "./pages/Quizz/LibraryQuizz";
import LoadingPage from "./pages/Quizz/LoadingPage.jsx";
import ManualQuizzCreation from './pages/Quizz/ManualQuizzCreation';
import QuizzGame from "./pages/Quizz/QuizzGame.jsx";
import QuizzList from "./pages/Quizz/QuizzList.jsx";
import ReportQuizz from "./pages/Quizz/ReportQuizz.jsx";
import SuggestionQuizzCreation from './pages/Quizz/SuggestionQuizzCreation.jsx';
import ExploreTutorial from "./pages/Tutorial/ExploreTutorial";
import LibraryTutorial from "./pages/Tutorial/LibraryTutorial";

import { AuthProvider } from "./context/AuthProvider.jsx";
import { CourseProvider } from "./context/CourseProvider.jsx";
import { QuizzProvider } from "./context/QuizzProvider.jsx";
import { TutorialProvider } from "./context/TutorialProvider.jsx";
import PrivateRoute from "./layouts/PrivateRoute";
import AccountConfirmation from './pages/Login/AccountConfirmation';
import CreateAccount from './pages/Login/CreateAccount';
import ForgotPassword from './pages/Login/ForgotPassword';
import Login from "./pages/Login/Login.jsx";
import PasswordResetConfirmation from './pages/Login/PasswordResetConfirmation';

import CourseDetail from "./components/CourseDetail";
import CreateCourse from './components/CreateCourse';
import Appearance from './pages/User/Appearance';
import Audio from './pages/User/Audio';
import Bookmarks from './pages/User/Bookmarks';
import Language from './pages/User/Language';
import Progress from './pages/User/Progress';
import Published from './pages/User/Published';
import Schedule from './pages/User/Schedule';
import Security from './pages/User/Security';


const App = () => {
    return (
        <AuthProvider>
            <QuizzProvider>
                <TutorialProvider>
                    <CourseProvider>
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
                                <Route path="/support" element={<PrivateRoute><Support /></PrivateRoute>} />

                                <Route path="/quizz" element={<PrivateRoute><ExploreQuizz /></PrivateRoute>} />
                                <Route path="/quizz/create" element={<PrivateRoute><CreateQuizz /></PrivateRoute>} />
                                <Route path="/quizz/list" element={<PrivateRoute><QuizzList /></PrivateRoute>} />
                                <Route path="/quizz/create/manual" element={<PrivateRoute><ManualQuizzCreation /></PrivateRoute>} />
                                <Route path="/quizz/create/suggestion" element={<PrivateRoute><SuggestionQuizzCreation /></PrivateRoute>} />

                                <Route path="/tutorial/explore" element={<PrivateRoute><ExploreTutorial /></PrivateRoute>} />
                                <Route path="/tutorial/library" element={<PrivateRoute><LibraryTutorial /></PrivateRoute>} />


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
                                <Route path="/loading" element={<PrivateRoute><LoadingPage /></PrivateRoute>} />

                                <Route path="/course/:id" element={<PrivateRoute><CourseDetail /></PrivateRoute>} />
                                <Route path="/create-course" element={<PrivateRoute><CreateCourse /></PrivateRoute>} />
                            </Routes>

                        </BrowserRouter>
                    </CourseProvider>
                </TutorialProvider>
            </QuizzProvider>
        </AuthProvider>
    );
}

export default App
