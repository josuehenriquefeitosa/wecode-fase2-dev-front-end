import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import ZipCode from '../ZipCode/ZipCode'

import IconMenu from '../../assets/icons/IconMenu'
import IconCart from '../../assets/icons/IconCart'
import IconLogo from '../../assets/icons/IconLogo'
import IconSearch from '../../assets/icons/IconSearch'
import IconUser from '../../assets/icons/IconUser'



function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [menu, setMenu] = useState(false);

	useEffect(()=>{
		const handleScroll = () =>{
			setIsScrolled(window.scrollY > 0)
		}

		window.addEventListener('scroll', handleScroll)

		return ()=>{
			window.removeEventListener('scroll', handleScroll)
		}

	}, []);

	const handleMenu = () =>{
		setMenu(console.log('menu '));
	}


	return (
		<div className={styles.headerContainer}>
			<ZipCode/>
			<div className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
				<ul>
						<li className={styles.liIcons}>
							<button onClick={handleMenu}>
								<IconMenu />
							</button>

							<button>
								<IconSearch />
							</button>
						</li>

						<li className={styles.liLogo}>
							<IconLogo />
						</li>

						<li className={styles.liIcons}>
							<button>
								<IconUser />
							</button>

							<div className={styles.cart}>
								<button>
									<IconCart />
									<p>0</p>
								</button>
							</div>
						</li>

					
				</ul>
			</div>
		</div>
	)
}

export default Header