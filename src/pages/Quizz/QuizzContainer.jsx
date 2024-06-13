import React, { useState } from 'react';
import ModalCreateQuizz from '../../components/ModalCreateQuizz';
import SidebarQuizz from '../../components/SidebarQuizz';
import Quizz from './Quizz';

const QuizzContainer = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="flex">
            <SidebarQuizz onOpenModal={handleOpenModal} />
            <Quizz />
            <ModalCreateQuizz show={showModal} onClose={handleCloseModal} />
        </div>
    );
};

export default QuizzContainer;
