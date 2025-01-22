import React, {useState} from "react";
import styles from "./Menu.module.scss";

import IconLogo from "../../assets/icons/IconLogo";
import IconXClose from "../../assets/icons/IconXClose";
import IconArrow from "../../assets/icons/IconArrow";

function Menu({ setMenuIsOpen }) {
	const [openSubmenu, setOpenSubmenu] = useState(false);


  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  const toggleSubmenu = () => {
    setOpenSubmenu((prev) => !prev)
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.header}>
        <IconLogo />
        <button className={styles.buttonIcon} onClick={() => setMenuIsOpen(false)}>
          <IconXClose />
        </button>
      </div>
      <div className={styles.bannerContainer}>
        <p>Celebration - 20 Anos</p>
        <p>
          <span>Conheça</span>
        </p>
      </div>
      <div className={styles.listItensContainer}>
        <h3>Liquida</h3>
        <ul className={styles.listItens}>
          <li>
            <div onClick={toggleSubmenu} className={styles.listItem}>
              Sapatos
              <IconArrow />
            </div>
            
            <ul className={`${styles.submenu} ${openSubmenu ? styles.visible : ''}`}>
							<li>Scarpins</li>
							<li>Mocassim</li>
							<li>Sapatilhas</li>
							<li>Mules</li>
							<li>Peep Toe</li>
							<li>Oxford</li>
						</ul>
          </li>
          <li>
            Sandálias <IconArrow />
          </li>
          <li>
            Botas <IconArrow />
          </li>
          <li>
            Tênis
            <IconArrow />
          </li>
        </ul>
        <p>
          <span>Outlet</span>
        </p>
      </div>
    </div>
  );
}

export default Menu;
