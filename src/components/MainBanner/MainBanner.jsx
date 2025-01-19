import React from 'react'
import styles from './MainBanner.module.scss'
import ModalCep from '../ModalCep/ModalCep.jsx'

function MainBanner() {
	return (
		<div className={styles.bannerContainer}>
			<ModalCep/>
			<button>Conheça agora!</button>
		</div>
	)
}

export default MainBanner