import React from 'react';
import styles from'./styles/App.module.scss';
import './styles/index.scss';
import {UserProvider} from './hooks/UserContext';
import Header from './components/Header/Header.jsx';
import MainBanner from './components/MainBanner/MainBanner.jsx';



function App()  {

  return (
    <UserProvider>
      <div className={styles.appContainer}>
        <Header/>
        <MainBanner />
        
      
      </div>
    </UserProvider>
  );
}

export default App;
