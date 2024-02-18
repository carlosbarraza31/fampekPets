import React from 'react';
import Header from './Header.js';
import FampekPets from './FampekPets.js';
import Footer from './Footer.js';
import './App.css';

function App() {
  const [isContactExpanded, setContactExpanded] = React.useState(false);
  const [shownPage, setShownPage] = React.useState('home');
  const [pagePet, setPagePet] = React.useState('none');

  function handleContactClick() {
      setContactExpanded(!isContactExpanded);
  }

  function handleClickOverlay(event) {
      event.currentTarget.classList.remove('m-active');
      setContactExpanded(false);
  }

  function handleShowPage(event) {
      setShownPage(event.currentTarget.getAttribute('data-js-to-page'));

      if (event.currentTarget.getAttribute('data-js-pet') !== 'none') {
          setPagePet(event.currentTarget.getAttribute('data-js-pet'));
      }
  }

  return (
      <>
          <Header handleContactClick={handleContactClick} handleShowPage={handleShowPage}/>
          <FampekPets isContactExpanded={isContactExpanded} handleClickOverlay={handleClickOverlay} shownPage={shownPage} pagePet={pagePet}/>
          <Footer/>
      </>
  );
}

export default App;
