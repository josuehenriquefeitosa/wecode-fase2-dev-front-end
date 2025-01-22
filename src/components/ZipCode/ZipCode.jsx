import React, { useState, useEffect } from 'react';
import ModalCep from '../ModalCep/ModalCep';
import styles from './ZipCode.module.scss';

export default function ZipCode() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Controla a abertura do modal
  const [zipCode, setZipCode] = useState(''); // Estado para armazenar o CEP
  const [city, setCity] = useState('São Paulo'); // Estado para armazenar a cidade
  const [state, setState] = useState('');

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.style.overflow = 'hidden'; // Impede o scroll
    } else {
      body.style.overflow = 'auto'; // Restaura o scroll
    }
  }, [isModalOpen]);

  useEffect(() => {
    const savedData = localStorage.getItem('bebece:userData');
    if (savedData) {
      const { zipCode, city, state } = JSON.parse(savedData);
      setZipCode(zipCode);
      setCity(city);
      setState(state);
      setIsModalOpen(false); // Fecha o modal se os dados já estiverem no localStorage
    }
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);
    const savedData = localStorage.getItem('bebece:userData');
    if (savedData) {
      const { zipCode, city ,state } = JSON.parse(savedData);
      setZipCode(zipCode);
      setCity(city);
      setState(state)
    }
  };

  return (
    <div className={styles.zipContainer}>
      <p>Você está em: {state} <span>{(zipCode || city)}</span></p>
      <button onClick={handleOpenModal}>Alterar</button>
      {isModalOpen && <ModalCep closeModal={closeModal} />}
    </div>
  );
}
