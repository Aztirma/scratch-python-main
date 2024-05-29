import React from 'react';
import SidebarProfile from '../../components/SidebarProfile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = () => {
    return (
        <div className='flex'>
            <SidebarProfile />
            <div className="flex-1 p-8">
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <div className="flex items-center mb-6">
                        <div className="h-24 w-24  rounded-full flex items-center justify-center mr-6">
                            <AccountCircleIcon className="text-gray-400" style={{ fontSize: 100 }} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">Komi Komi</h1>
                            <p className="text-gray-600">Computer Science</p>
                            <div className="flex items-center text-gray-500 mt-2">
                                <LocationOnIcon className="mr-1" />
                                <span>Lima - 02:15 AM</span>
                            </div>
                        </div>
                        <div className="ml-auto text-gray-500">
                            <StarBorderIcon className="mr-1" />
                            Top rated
                        </div>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-lg font-bold text-gray-800 mb-2">Overview</h2>
                        <p className="text-gray-600">
                            I am a computer science student at the National University of Engineering. I consider myself a passionate,
                            self-taught student with a strong foundation in algorithms, mathematics, and data structures.
                            I have knowledge about web development such as the use of frameworks and different programming
                            languages. I also have skills about managing database managers. I am looking to leverage my development
                            skills with a focus on collaboration, communication, and creativity.
                        </p>
                    </div>
                    {/* <div className="flex justify-between text-gray-800">
                        <div className="text-center">
                            <p className="text-xl font-bold">S/8.54</p>
                            <p className="text-gray-500">Hourly rate</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-bold">S/1k+</p>
                            <p className="text-gray-500">Total earned</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-bold">2+</p>
                            <p className="text-gray-500">Jobs finished</p>
                        </div>
                        <div className="text-center">
                            <p className="text-xl font-bold">2000+</p>
                            <p className="text-gray-500">Hours worked</p>
                        </div>
                    </div> */}
                </div>
                {/* <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-gray-800">Progress Chart</h2>
                        <select className="border border-gray-300 rounded p-2 text-gray-600">
                            <option>Sort by: Newest</option>
                            <option>Sort by: Oldest</option>
                            <option>Sort by: Highest Rated</option>
                        </select>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-md font-bold text-gray-800">G&S <span className="text-gray-500">September 2022</span></h3>
                        <div className="flex items-center text-yellow-500">
                            <StarIcon />
                            <StarIcon />
                            <StarBorderIcon />
                            <StarBorderIcon />
                            <StarBorderIcon />
                        </div>
                        <p className="text-gray-600 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt imperdiet aliquet. Integer malesuada ligula mollis velit malesuada vehicula. Aenean odio mauris, fringilla eget consectetur quis, molestie quis eros. Nam aliquam et nisl ut auctor. Nam efficitur risus in ante cursus, sed rutrum libero elementum. Nullam suscipit fermentum ex elementum venenatis. Phasellus tempus tellus nisi, et rhoncus nunc convallis vitae. Etiam faucibus leo lorem, vel feugiat lectus vehicula et. Aenean scelerisque a mauris sit amet tempor. Praesent condimentum, risus vitae fermentum egestas, quam elit gravida orci, ac blandit felis ex nec enim. Phasellus gravida leo nec ipsum condimentum laoreet. Nulla nec commodo ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus
                        </p>
                        <p className="text-gray-800 font-bold mt-4">S/ 1200</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Profile;
