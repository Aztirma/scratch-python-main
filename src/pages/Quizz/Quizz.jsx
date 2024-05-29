import React from 'react';
import { Link } from 'react-router-dom';

import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WarningIcon from '@mui/icons-material/Warning';
import FolderIcon from '@mui/icons-material/Folder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

const Quizz = () => {
    return (
        // <div className="flex">
            <div className="flex-1">
                <div className="p-6 bg-gray-100 min-h-screen">
                    <div className="bg-white rounded-lg shadow p-4 mb-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mr-4">
                                    <span className="text-4xl text-gray-400">K</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">QUIZZ</h2>
                                    <h3 className="text-lg font-semibold">Crear</h3>
                                    <p className="text-gray-600">10th course · World languages · 83% accuracy · 2.9K plays</p>
                                    <p className="text-gray-400">Deleted User · 6 years ago</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">

                                <button className="bg-white hover:bg-slate-100 border-2 border-black text-gray-800 rounded px-4 py-2 flex items-center">
                                    <ShareIcon className="mr-2" />
                                    <span>Share</span>
                                </button>
                                <button className="bg-white hover:bg-slate-100 border-2 border-black text-gray-800 rounded px-4 py-2 flex items-center">
                                    <FavoriteBorderIcon className="mr-2" />
                                    <span>95</span>
                                </button>

                            </div>
                        </div>

                        <div className="flex justify-end space-x-2 mt-4">
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded px-4 py-2">
                                <div className="mr-2" />
                                <span>Spreadsheet</span>
                            </button>
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded px-4 py-2">
                                <FolderIcon className="mr-2" />
                                <span>Save</span>
                            </button>
{/* 
                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded px-4 py-2">
                                <FileCopyRoundedIcon className="mr-2" />
                                <span>Copy and edit</span>
                            </button> */}
                        </div>
                    </div>

                    <div className="flex space-x-2 mb-8">
                        <button className="bg-purple-principal hover:bg-purple-700 text-white rounded-lg py-2 px-4 flex items-center justify-center w-40">
                            <CoPresentRoundedIcon className="mr-2" />
                            <span>Iniciar ahora</span>
                        </button>
                        <button className="bg-purple-100 hover:bg-purple-200 text-purple-principal rounded-lg py-2 px-4 flex items-center justify-center w-40">
                            <WatchLaterIcon className="mr-2" />
                            <span>Assign</span>
                        </button>
                    </div>
                </div>
            </div>

         // </div> 
    );
}

export default Quizz;
