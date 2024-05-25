import React, { useState } from 'react';
import SidebarQuizz from '../../components/SidebarQuizz';
import Quizz from './Quizz';
import ModalCreateQuizz from '../../components/ModalCreateQuizz';

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
