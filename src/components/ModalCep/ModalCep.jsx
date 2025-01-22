import React, { useState} from "react";
import { searchZipCode } from "../../services/zipCodeService";
import styles from "./ModalCep.module.scss";
import IconXClose from "../../assets/icons/IconXClose";

export default function ModalCep({ closeModal }) {
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [isValidZip, setIsValidZip] = useState(true);
  



  
  const handleZipCodeChange = async (e) => {
    const inputZip = e.target.value;
    setZipCode(inputZip);

    if (/^\d{8}$/.test(inputZip)) {
      try {
        const { localidade: city, uf: state } = await searchZipCode(inputZip);
        if (city && state) {
          setCity(city);
          setState(state);
          setIsValidZip(true);
        } else {
          resetFields();
        }
      } catch {
        resetFields();
      }
    } else {
      resetFields();
    }
  };

  const resetFields = () => {
    setCity("");
    setState("");
    setIsValidZip(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidZip) {
      alert("Por favor, insira um CEP válido antes de salvar!");
      return;
    }


    const userInfo = { zipCode, city, state };
    localStorage.setItem("bebece:userData", JSON.stringify(userInfo));

    closeModal();
  };


  return (
    <div className={styles.darkFrame}>
      <div className={styles.modalContainer}>
        <h4>Personalize sua experiência e encontre produtos perto de você!</h4>
        <div className={styles.wrapperContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.wrapper}>
              <label htmlFor="zipCode">Código Postal*</label>
              <input
                type="text"
                id="zipCode"
                placeholder="00000-000"
                value={zipCode}
                required
                maxLength={8}
                onChange={handleZipCodeChange}
              />
            </div>
            <div className={styles.wrapperZip}>
              <div className={styles.wrapper}>
                <label htmlFor="city">Cidade</label>
                <input type="text" id="city" value={city} disabled />
              </div>
              <div className={styles.wrapper}>
                <label htmlFor="state">Estado</label>
                <select id="state" value={state} disabled>
                  <option value={state}>{state}</option>
                </select>
              </div>
            </div>
            <button type="submit">Salvar endereço</button>
          </form>
        </div>
        <button className={styles.closeBox} onClick={closeModal}>
          <IconXClose />
        </button>
      </div>
    </div>
  );
}
