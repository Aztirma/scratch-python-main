import React from 'react';
import SidebarQuizz from '../../components/SidebarQuizz';
import './LibraryQuizz.css';

const LibraryQuizz = () => {
  return (
    <div className="library-container">
      <SidebarQuizz />
      <div className="library-content">
        <div className="library-header">
          <h2 className="library-title">Mi biblioteca</h2>
          <input
            type="text"
            placeholder="Buscar en mi biblioteca"
            className="search-input"
          />
        </div>
        <div className="library-main">
          <div className="library-sidebar">
            <ul className="library-menu">
              <li className="menu-item active">
                <span className="menu-text">Creado por mí</span>
                <span className="menu-count">2</span>
              </li>
              <li className="menu-item">
                <span className="menu-text">Importado</span>
                <span className="menu-count">0</span>
              </li>
              <li className="menu-item">
                <span className="menu-text">Usado previamente</span>
                <span className="menu-count">3</span>
              </li>
              <li className="menu-item">
                <span className="menu-text">Vinculado por mí</span>
                <span classhe="menu-count">0</span>
              </li>
              <li className="menu-item">
                <span className="menu-text">Compartido por mí</span>
                <span className="menu-count">0</span>
              </li>
              <li className="menu-item">
                <span className="menu-text">Estándares etiquetados</span>
                <span className="menu-count">0</span>
              </li>
              <li className="menu-item">
                <span className="menu-text">Todo mi contenido</span>
                <span className="menu-count">3</span>
              </li>
            </ul>
            <div className="collections">
              <h3 className="collections-title">Mis colecciones</h3>
              <button className="collections-button">Nueva colección</button>
            </div>
          </div>
          <div className="library-content-items">
            <div className="library-buttons">
              <button className="button primary">Publicados (2)</button>
              <button className="button secondary">Borradores (0)</button>
            </div>
            <div className="library-items">
              <div className="library-item">
                <div className="item-info">
                  <img src="/path/to/image1.png" alt="Conceptos Básicos de Python" className="item-image" />
                  <div className="item-details">
                    <h3 className="item-title">Conceptos Básicos de Python</h3>
                    <p className="item-meta">10 Preguntas · 1st Grade · Science</p>
                    <p className="item-author">a e · 16 días hace</p>
                  </div>
                </div>
                <div className="item-actions">
                  <button className="button secondary">Compartir</button>
                  <button className="button primary">Jugar</button>
                </div>
              </div>
              <div className="library-item">
                <div className="item-info">
                  <img src="/path/to/image2.png" alt="One Piece Challenge" className="item-image" />
                  <div className="item-details">
                    <h3 className="item-title">One Piece Challenge</h3>
                    <p className="item-meta">10 Preguntas · 2nd Grade · Other</p>
                    <p className="item-author">a e · 19 días hace</p>
                  </div>
                </div>
                <div className="item-actions">
                  <button className="button secondary">Compartir</button>
                  <button className="button primary">Jugar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryQuizz;


