import React, { useState } from 'react'
import styles from './ModalCep.module.scss'

export default function ModalCep() {
	const [zipCode, setZipCode] = useState();


	const handleZipCode = ()=>{
		setZipCode('')
	}

	console.log(zipCode);
	

	return (
		<div className={styles.modalContainer}>
			<h4>Personalize sua experiência e encontre produtos perto de você!</h4>
			<div className={styles.wrapperContainer}>
				<form action="">
					<div className={styles.wrapper}>
						<label for='zipCode' > Código Postal*</label>
						<input type="number" name="" id="zipCode" placeholder='00000-000'/>
					</div>

					<div className={styles.wrapperZip}>
						<div className={styles.wrapper}>
							<label for='city'>Cidade</label>
							<input type="text" name="" id="city" placeholder='Opcional'/>
						</div>

						<div className={styles.wrapper}>
							<label for=''>Estado</label>
							<select required>
								<option value="" disabled selected> Opcional</option>
								<option value= {/>/}>{}</option>
							</select>
						</div>
					</div>

					<button type="submit" onClick={handleZipCode}>Salvar endereço</button>
				</form>
			</div>
		</div>
	)
}
