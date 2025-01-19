import React from 'react';
import styles from'./ZipCode.module.scss';

function ZipCode() {



	const openModal = () =>{

	}

	return (
		<div className={styles.zipContainer}>
			<p>Você está em: <span>São Paulo</span></p>
			<button onClick={openModal}>Alterar</button>
		</div>
	)
}

export default ZipCode